import React from 'react';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('../src/Holberton Logo.jpg')} alt="Holberton Logo" />
        <h1>School Dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email</label>
        <input id='email' type='text'/>

        <label htmlFor='password'>Password:</label>
        <input id='password'></input>

        <button>OK</button>
      </div>
      <footer className="App-footer">
      <p>{getFooterCopy(true)}</p>
        <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
      </footer>
    </div>
  );
}

export default App;