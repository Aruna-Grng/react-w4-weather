// import logo from './logo.svg';
import './App.css';
import WeatherSearch from './WeatherSearch';
import CityDisplay from "./CityDisplay";

function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherSearch />
        <CityDisplay icon="CLEAR_DAY" size={200} />
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
