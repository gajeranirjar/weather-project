import React, { useEffect, useState } from 'react'
import axios from "axios";
import WeatherCard from './components/weatherCard';
import './App.css'

const App = () => {
const [searchValue , setSearchValue ] = useState('gujarat')
  const [weatherData , setWeatherData ] = useState({})

  const getWeatherData = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${import.meta.env.VITE_WEATHERKEY}`;
      const data = await axios.get(url);
      const { data: weatherinfo } = data;
      const {temp , pressure , humidity} = weatherinfo.main ;
      const {main: weathermood} = weatherinfo.weather[0];
      const { name } = weatherinfo;
      const { speed } = weatherinfo.wind;
      const { sunset , country} = weatherinfo.sys;

      const myNewWeatherInfo = {
        temp , pressure , humidity , weathermood , name , speed , sunset , country
      }

      setWeatherData(myNewWeatherInfo);
    } catch (error) {
      console.error("👌 ~ getWeatherData ~ error:", error)
    }
  }

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <>  
        <div className="wrap">
                <div className="searchBar">
                    <input 
                        type="search"
                        placeholder='Search...'
                        autoFocus
                        id='search'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <button className='btn' type='button' onClick={getWeatherData}>
                        Search
                    </button>
                </div>        
        </div>
        <WeatherCard {...weatherData}/>
    </>
  )
}

export default App

