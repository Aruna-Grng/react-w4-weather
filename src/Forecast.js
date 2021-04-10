import React from "react";
import "./Forecast.css";
import ReactAnimatedWeather from 'react-animated-weather';

export default function Forecast() {
    return (
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <p className="forecast-Day">Tue</p>
                        <p className="icon">
                            <ReactAnimatedWeather 
                                icon="CLEAR_DAY"
                                color="#eeeeee"
                                size={60}
                                animate={true}
                                />
                        </p>
                        <p className="forecast-Temperature"><span className="high-Temperature">24°</span> <span className="low-Temperature">| 11°</span></p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <p className="forecast-Day">Wed</p>
                        <p> 
                            <ReactAnimatedWeather 
                                    icon="PARTLY_CLOUDY_DAY"
                                    color="#eeeeee"
                                    size={60}
                                    animate={true}
                                    />  
                        </p>
                        <p className="forecast-Temperature"><span className="high-Temperature">22°</span> | <span className="low-Temperature">13°</span></p>                           
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <p className="forecast-Day">Thur</p> 
                        <p>
                            <ReactAnimatedWeather 
                                    icon="PARTLY_CLOUDY_DAY"
                                    color="#eeeeee"
                                    size={60}
                                    animate={true}
                                    /> 
                        </p>
                        <p className="forecast-Temperature"><span className="high-Temperature">26°</span> | <span className="low-Temperature">15°</span></p>                    
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <p className="forecast-Day">Fri</p>
                        <p>
                            <ReactAnimatedWeather 
                                    icon="CLEAR_DAY"
                                    color="#eeeeee"
                                    size={60}
                                    animate={true}
                                    />
                        </p> 
                        <p className="forecast-Temperature"><span className="high-Temperature">30°</span> | <span className="low-Temperature">18°</span></p>             
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <p>Sat</p>
                        <p>
                            <ReactAnimatedWeather 
                                    icon="CLEAR_DAY"
                                    color="#eeeeee"
                                    size={60}
                                    animate={true}
                                    />
                        </p>
                        <p className="forecast-Temperature"><span className="high-Temperature">24°</span> | <span className="low-Temperature">11°</span></p>  
                    </div>
                </div>
            </div>
        </div>
    );
}

