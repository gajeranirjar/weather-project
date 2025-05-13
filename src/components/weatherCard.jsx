import React, { useEffect, useState } from 'react'

const WeatherCard = ({ temp, pressure, humidity, weathermood, name, speed, sunset, country } ) => {
    const [weatherState, setWeatherState] = useState("");
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(()=> {
        if(weathermood){
            switch (weathermood) {
                case "Clouds": setWeatherState("wi-day-cloudy")
                break;
                case "Haze": setWeatherState("wi-fog")
                break;
                case "Clear": setWeatherState("wi-day-sunny")
                break;
                case "Mist": setWeatherState("wi-dust")
                break;
                default:
                    setWeatherState("wi-day-sunny")
                    break;
            }
        }
    },[weathermood])
    
    useEffect(() => {
        const timer = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

    let date = new Date(sunset * 1000);
    let timeStr = `${date.getHours()} : ${date.getMinutes()}`

    return (
        <>
            <article className='widget'>
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temp">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">
                            {weathermood}
                        </div>
                        <div className="place">
                            {name}, {country}
                        </div>
                    </div>
                </div>
                <div className="timeInfo">{currentTime}</div>
                <div className="extraInfo">
                    <div className="tempInfoMInMax">
                        <div className="twoSidedSection">
                            <p>
                                <i className='wi wi-sunset'></i>
                            </p>
                            <p className="extraInfoRightSide">
                                {timeStr} PM <br />
                                Sunset
                            </p>
                        </div>
                        <div className="twoSidedSection">
                            <p>
                                <i className='wi wi-humidity'></i>
                            </p>
                            <p className="extraInfoRightSide">
                                {humidity} <br />
                                Humidity
                            </p>
                        </div>
                        <div className="twoSidedSection">
                            <p>
                                <i className='wi wi-night-alt-thunderstorm'></i>
                            </p>
                            <p className="extraInfoRightSide">
                                {pressure} <br />
                                Pressure
                            </p>
                        </div>
                        <div className="twoSidedSection">
                            <p>
                                <i className='wi wi-day-windy'></i>
                            </p>
                            <p className="extraInfoRightSide">
                                {speed} <br />
                                Speed
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default WeatherCard