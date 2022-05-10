import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Components/Profile';
import "./Components/profile.css"
import Interruptor from './Components/Interruptor';
import "./Components/interruptor.css"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/**
    <Profile photoURL="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
    name="Alan Turing">
     
    <p>Descripition:</p>
    <p>Alan Mathison Turing OBE FRS was an English mathematician, computer scientist, logician,
        cryptanalyst, philosopher, and theoretical biologist
    </p>
    </Profile>
       */}
    <Interruptor>

    </Interruptor>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
