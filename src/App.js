import React from 'react';
import './style.css';
import Introduction from './Introduction.js';
import AboutMe from './AboutMe.js';

export default function App() {
  return (
    <div>
      <Introduction />
      <hr />
      <AboutMe />
    </div>
  );
}
