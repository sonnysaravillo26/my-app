import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from './card'; //fucntional component
import { Bus } from './bus'; // using Props
import { House } from './house'; // using Events e.g onClick, onBlur, onChange 
import { Country } from './country'; // using Hook e.g useState, useEffect, useRef
import { Users } from './users'; // Fetching API
import { Counting } from './counting'; // counting effects

function App() {
  return (
    <div className="container">
      {/* FUNCTIONAL COMPONENT */}
      <Card />

      <hr />

      {/* USING PROPS */}
      <Bus name="Cocomelon" />

      <hr />

      {/* USING EVENTS eg. onClick, onBlur, onChange */}
      <House />

      <hr />

      {/* USING HOOK eg. useState, useEffect, useRef */}
      <Country />

      <hr /> 

      {/* COUNTING FEATURES */}
      <Counting /> 

      <hr /> 

      {/* USING API (AXIOS) to FETCH DATA */}
      <Users />

    </div>

  );
}

export default App;
