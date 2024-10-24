import React from 'react';
import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ title, setTitle}) => {
	const handleInput = (e) => {
		setTitle(e.target.value);
	};

	return (
		<div className="search-bar-container">
			<span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
			<input
				type="text"
				value={title}
				onChange={handleInput}
				placeholder="Search Movies"
				className="search-input"
			/>
		</div>
	);
};

export default SearchBar;
