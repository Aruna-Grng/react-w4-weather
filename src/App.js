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
    </div>
    
  );
  
}

export default App;
