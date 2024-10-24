import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import './general.css';

// Composant Input qui accepte les props spécifiés
const Input = ({ label, type, className, value, setValue, icon, inputAttributes = {} }) => {

  // Fonction handleInput qui met à jour la valeur via setValue
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`input-container ${className ? className : ''}`}>
      <div className="label-container">
        {icon && <span className="input-icon"><FontAwesomeIcon icon={icon} /></span>}
        {label && <label className="input-label">{label}:</label>}
      </div>
      <input
        type={type} // Type de l'input (text, email, password, etc.)
        className="input-field"
        value={value} // La valeur contrôlée
        onChange={handleInput} // Appelle handleInput à chaque changement
        {...inputAttributes} // D'autres attributs supplémentaires passés via inputAttributes
      />
    </div>
  );
};

export default Input;
