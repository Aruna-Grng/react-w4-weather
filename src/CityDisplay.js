import React from "react";
import "./CityDisplay.css";
import ReactAnimatedWeather from "react-animated-weather";

function CityDisplay(props) {
    return (
        <div>
            <h1 className="city">Dallas</h1>
            <h2>Sunny</h2>
            <p>
                <ReactAnimatedWeather
                    icon={props.icon}
                    color="rgb(255, 220, 52)"
                    size={props.size}
                    animate={true} 
                />
            </p>
            <h1 className="temperature">21°<span className="unit">C</span></h1>
        </div>
    );
}


export default CityDisplay;