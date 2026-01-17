import { useEffect, useState } from 'react'

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
    let timeStr = `${date.getHours() || 19} : ${date.getMinutes() || 20}`

    return (
        <>
            <article className='widget'>
                <div className="weatherIcon">
                    <i className={`wi ${weatherState || 'wi-day-sunny'}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temp">
                        <span>{temp || 25.5}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">
                            {weathermood || "CLEAR"}
                        </div>
                        <div className="place">
                            {name || "Gujarat"}, {country || "IN"}
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
                                {timeStr ?? "19 : 15"} PM <br />
                                Sunset
                            </p>
                        </div>
                        <div className="twoSidedSection">
                            <p>
                                <i className='wi wi-humidity'></i>
                            </p>
                            <p className="extraInfoRightSide">
                                {humidity || 40} <br />
                                Humidity
                            </p>
                        </div>
                        <div className="twoSidedSection">
                            <p>
                                <i className='wi wi-night-alt-thunderstorm'></i>
                            </p>
                            <p className="extraInfoRightSide">
                                {pressure || 1007} <br />
                                Pressure
                            </p>
                        </div>
                        <div className="twoSidedSection">
                            <p>
                                <i className='wi wi-day-windy'></i>
                            </p>
                            <p className="extraInfoRightSide">
                                {speed || 1.82} <br />
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