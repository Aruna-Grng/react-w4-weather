import React from "react";
import "./CityDisplay.css";
import ReactAnimatedWeather from "react-animated-weather";
import HumidityInfo from "./HumidityInfo";
import Temperature from "./Temperature";
import WindSpeed from "./WindSpeed";
import Forecast from "./Forecast";

function CityDisplay(props) {
    return (
        <div>
            <h1 className="city">Dallas</h1>
            <h2>Sunny</h2>
            <p>
                <ReactAnimatedWeather
                    icon={props.icon}
                    color="#eeeeee"
                    // color="rgb(255, 220, 52)"
                    size={props.size}
                    animate={true} 
                />
            </p>
            <div className="row justify-content-md-center">
                <HumidityInfo />
                <Temperature />
                <WindSpeed />
            </div>
            {/* <br /> */}
            <hr />
            <div>
                <Forecast />
            </div>
        </div>
    );
}


export default CityDisplay;