import React, { useState } from 'react';
import './App.css';
// import Input from './components/general/Input.js';
import SelectInput from './components/general/SelectInput.js';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Button from './components/general/Button';
import SearchBar from './components/general/SearchBar';

function App() {
  const [selectedOption, setSelectedOption] = useState('');

  // Options à passer au SelectInput
  const options = [
    { value: 'Default', label: 'Default' },
    { value: 'Latest', label: 'Latest' },
    { value: 'Oldest', label: 'Oldest' },
    { value: 'Highest Rated', label: 'Highest Rated' },
    { value: 'Lowest Rated', label: 'Lowest Rated'}
  ];
  const handleButtonClick = () => {
    console.log('Button clicked!'); // Gérer le clic sur le bouton
  };
  const [title, setTitle] = useState('');

  return (
    <div className="App">
      <SelectInput
        label="Sort"
        options={options} // Passer les options ici
        value={selectedOption} // La valeur actuelle
        setValue={setSelectedOption} // La fonction pour mettre à jour l'état
      />
      <Button
        label="Load More..."
        className="my-custom-class"
        onClick={handleButtonClick}
        icon={faUser} // Passer l'icône
      />
      <SearchBar
        title={title}
        setTitle={setTitle}
      />
    </div>
  );
}

export default App;
