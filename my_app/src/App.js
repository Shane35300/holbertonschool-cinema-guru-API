import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const[userUsername, setUserUsername] = useState("");

  useEffect(() => {
    // Récupère le token dans le localStorage
    const accessToken = localStorage.getItem('accessToken');

    // Si le token existe, envoie une requête POST à /api/auth/ avec le token dans le header
    if (accessToken) {
      axios.post('/api/auth/', {}, {
        headers: {
          Authorization: `Bearer ${accessToken}` // Ajoute le token au header
        }
      })
      .then(response => {
        // Si la requête réussit, met à jour les états
        setIsLoggedIn(true); // Indique que l'utilisateur est connecté
        setUserUsername(response.data.username); // Met à jour le nom d'utilisateur
      })
      .catch(error => {
        console.error('Erreur lors de la vérification de l\'authentification', error);
        // Si la requête échoue, reste déconnecté
        setIsLoggedIn(false);
      });
    }
  }, []); // Le tableau vide [] signifie que cet effet ne se déclenche que lors du montage initial

  // Retourne le composant en fonction de l'état de isLoggedIn
  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard username={userUsername} />
      ) : (
        <Authentication />
      )}
    </div>
  );
}

export default App;
