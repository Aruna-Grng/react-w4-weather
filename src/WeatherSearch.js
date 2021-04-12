import React from "react";
import "./WeatherSearch.css";

function WeatherSearch() {
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