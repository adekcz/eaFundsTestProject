import logo from './logo.svg';
import './App.css';
import {data} from './data/data.js';
import {Summary} from './components/Summary'
import { useState, useReducer } from "react";


function App() {
  const [loadedData, setData] = useState(data);
  const neco = 5*3;

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {loadedData[0]['Payout amount']}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Summary label="all grants for now" rows={loadedData}  />
    </div>
  );
}

export default App;
