import React from 'react';
import './App.css'; 
import { Card } from './card'; //fucntional component
import { Bus } from './bus'; // using Props
import { House } from './house'; // using Events e.g onClick, onBlur, onChange 
import { Country } from './country'; // using Hook e.g useState, useEffect, useRef
import { Book } from './Book'; // using Hook e.g useState, useEffect, useRef

function App() {
  return (
    <div>
      {/* FUNCTIONAL COMPONENT */}
      <Card />

      <hr/>

        {/* USING PROPS */}
      <Bus name="Cocomelon" />

      <hr/>

        {/* USING EVENTS eg. onClick, onBlur, onChange */}
      <House/>

      <hr/>

        {/* USING HOOK eg. useState, useEffect, useRef */}
      <Country/>
      
      <hr/>
 
        {/* USING INTERFACES */}
      <Book/> 

    </div>

  );
}

export default App;
