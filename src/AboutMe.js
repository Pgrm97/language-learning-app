import React from 'react';
import './style.css';
import Countries from './countries.js';

export default function AboutMe() {
  return (
    <div>
      <h1>Pedro Guillermo Rodríguez Menicucci</h1>
      <p>
        Born and raised in the city of Santo Domingo, Dominican Republic. A
        tropical island 🌴 located in the middle of the Caribbean Sea. 🌊
      </p>
      <img src={Countries.Dominican} />
    </div>
  );
}
