import logo from './logo.svg';
import './App.css';
import {data} from './data/data.js';
import {Summary} from './components/Summary'
import { useState, useReducer } from "react";


function App() {
  const [loadedData, setData] = useState(data);
    // Get all unique fund names
  let fundNames = [...new Set(loadedData.map(item => item.Fund))];

  const [selectedFundData, setSelectedFundData] = useState([]);
  const [selectedFundName, setSelectedFundName] = useState(["none"]);

  const handleFundClick = (fundName) => {
    const filteredData = data.filter(item => item.Fund === fundName);
    setSelectedFundData(filteredData);
    setSelectedFundName(fundName);
  };

  return (

    <div className="App">
      <header className="App-header">
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
        <div>
      {fundNames.map((fund, index) => (
        <div key={index}>
          <button to="/summary" onClick={() => handleFundClick(fund)}>
            {fund}
          </button>
        </div>
      ))}
      
      <Summary label={selectedFundName} rows={selectedFundData} />
    </div>

      </header>

    </div>
  );
}

export default App;
