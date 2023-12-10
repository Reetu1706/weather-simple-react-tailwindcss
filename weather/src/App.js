import React, { useState } from 'react';
import './App.css';


function App(){
  const [city, setCity] = useState('delhi');
  const [weather, setWeather] = useState();

  const fetchWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cf3ab751d5777650de9a252b8a240643&units=metric`)

      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((error) => console.log(error.message));
  };

const handleSubmit=(e)=>{
  e.preventDefault();

  fetchWeather();
}

  return (
    <div className="App flex flex-col items-center">
      <h1 className="py-4 text-5xl text-white font-serif">Search Weather</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter city name"
            className="px-4 py-3 font-sans outline-none "
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit" className="px-4 py-3 bg-purple-500 hover:bg-purple-400 text-white
          hover:text-black">
            Search
          </button>
        </form>
      </div>

      { weather && (
        <div className="card bg-purple-600 text-white w-[280px] h-[380px] flex flex-col justify-center items-center mt-10">
          <h4 className="text-2xl">{weather.name}</h4>
          <img
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt=""
            className="w-[170px]"
          />
        <h2 className='text-5xl font-bold'>{Math.round(weather.main.temp)}°C</h2>
        <p className='text-xl'>{weather.weather[0].main}</p>
      </div>
)}
    </div>
  )
}

export default App;
