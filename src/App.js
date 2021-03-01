import './App.css';
import React from 'react';
import Crypto from './Components/Crypto/Crypto';

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src="./assets/bitcoin.png" alt="bitcoin" className="logo"/>
        <h1><span className="mobileHide">itCoin </span>exchange rate</h1>
      </div>
      <Crypto />
    </div>
  );
}

export default App;
