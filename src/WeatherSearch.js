import React from "react";
// import axios from "axios";
import "./WeatherSearch.css";

function WeatherSearch() {
    // const [city, setCity] = useState("");
    // const [cityDetails, setCityDetails] = useState("");

    // function searchCity(event) {
    //     event.preventDefault();
    //     let apiKey = "28a9b26783d5b53ed2f25d7dd7717889";
    //     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 
    //     axios.get(apiUrl).then(displayCity);
    // }
    
    // function displayCity(response) {
    //     console.log(response.data);
    //     let cityName = response.data.name;
    //     let weatherCondition = response.data.weather[0].description;
    //     // let weatherIcon = 
    // }

    // function updateCity(event) {
    //     setCity(event.target.value);
    // }

    return (
        <div className="Search">
            <form>
                <input className="city-name" style={{backgroundColor: '#eeeeee'}}  type="search" placeholder="Enter city name..." /> {""}
                <input className="search-btn" type="submit" value="Search" /> {""}
            </form>
            
        </div>
    );
}

export default WeatherSearch;