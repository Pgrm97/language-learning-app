import React from 'react';
import './style.css';
import Languages from './languages.js';

export default function Introduction() {
  return (
    <div>
      <h1>Welcome to the Language Learning Center of Santo Domingo!</h1>
      <p>
        Here you'll find excellent resources to start your language learning
        journey.
      </p>
      <img src={Languages.Spanish.Image} />
      <p>{Languages.Spanish.Description}</p>
    </div>
  );
}
