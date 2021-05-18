import React from 'react';
import './style.css';
import Languages from './languages.js';
import Countries from './countries.js';
import AboutMe from './AboutMe.js';

export default function App() {
  return (
    <div>
      <h1>Welcome to the Language Learning Center of Santo Domingo!</h1>
      <p>
        Here you'll find excellent resources to start your language learning
        journey.
      </p>
      <img src={Languages.Spanish.Image} />
      <p>{Languages.Spanish.Description}</p>
      <AboutMe />
    </div>
  );
}
