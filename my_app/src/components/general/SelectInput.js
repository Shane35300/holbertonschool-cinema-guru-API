import React from 'react';
import './general.css';

// Composant Input qui accepte les props spécifiés
const SelectInput = ({ label, options, className, value, setValue}) => {

  // Fonction handleInput qui met à jour la valeur via setValue
  const handleSelect = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`select-input-container ${className ? className : ''}`}>
      <div className="label-container">
        {label && <label className="input-label">{label}:</label>}
      </div>
      <select value={value} onChange={handleSelect} className="select-field">
        {/* Générer chaque option à partir des props options */}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
