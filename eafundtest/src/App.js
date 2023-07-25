import logo from "./logo.svg";
import "./App.css";
import { data } from "./data/data.js";
import { Summary } from "./components/Summary";
import { useState, useReducer } from "react";
import { ResultsTable } from "./components/ResultsTable";

function App() {
  const [loadedData, setData] = useState(data);
  // Get all unique fund names
  let fundNames = [...new Set(loadedData.map((item) => item.Fund))];

  const filteredDataDefault = data.filter((item) => item.Fund === fundNames[0]);

  const [selectedFundData, setSelectedFundData] = useState(filteredDataDefault);
  const [selectedFundName, setSelectedFundName] = useState(fundNames[0]);

  function filterData(data, fundName) {
    return data.filter((item) => item.Fund === fundName);
  }
  const handleFundClick = (fundName) => {
    const filteredData = filterData(data, fundName);
    setSelectedFundData(filteredData);
    setSelectedFundName(fundName);
  };

  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchChange(value) {
    const filteredData = filterData(data, selectedFundName);
    const searchedData = filteredData.filter((item) =>
      String(item.Summary + item["Last name"] + item.filter)
        .toLowerCase()
        .includes(value.toLowerCase())
    );
    setSelectedFundData(searchedData);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {fundNames.map((fund, index) => (
            <div key={index}>
              <button to="/summary" onClick={() => handleFundClick(fund)}>
                {fund}
              </button>
            </div>
          ))}

          <Summary label={selectedFundName} rows={selectedFundData} />
          <input
            type="text"
            placeholder="Search"
            onChange={(event) => handleSearchChange(event.target.value)}
          />
          <ResultsTable rows={selectedFundData} />
        </div>
      </header>
    </div>
  );
}

export default App;
