import React from 'react';
import './style.css';
import Countries from './countries.js';

const { useState } = React;

export default function AboutMe() {
  const [SelectedCountry, setSelectedCountry] = useState('Dominican Republic');
  const [SelectedCountryFlag, setSelectedCountryFlag] = useState();
  return (
    <div>
      <h1>Pedro Guillermo Rodríguez Menicucci</h1>
      <p>
        Born and raised in the city of Santo Domingo, Dominican Republic. A
        tropical island 🌴 located in the middle of the Caribbean Sea. 🌊
      </p>
      <p>Currently located in {SelectedCountry}</p>
      <img src={Countries.Dominican.Flag} />
      <button
        onClick={() => {
          setSelectedCountry('United Kingdom');
        }}
      >
        {SelectedCountry}
      </button>
    </div>
  );
}
