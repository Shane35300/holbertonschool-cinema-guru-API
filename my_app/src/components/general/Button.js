import React from 'react';
import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ label, className, onClick, icon }) => {
	return (
		<button
			className={`button ${className ? className : ''}`} // Ajoute des classes personnalisées si fournies
			onClick={onClick} // Associe la fonction onClick passée en prop
		>
			{icon && <FontAwesomeIcon icon={icon} />} {/* Affiche l'icône si elle est fournie */}
			{label} {/* Texte du bouton */}
		</button>
	)
}

export default Button;
