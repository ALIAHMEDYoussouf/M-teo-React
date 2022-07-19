import React, { useState } from 'react';
const api = {
  key: "d6edc1df5f458eccebed50dc62c03f29",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (

    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        
        <div className="search-box">
        <h1 className='meto'>Meteo challenge.io</h1>
        <h5 className='topp'>
                    Created by <b>@Youssouf ALI AHMED</b> - devchallenges.io
                </h5>
        
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
         /> 
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="humidity">
            <h4>Temperature</h4>
              {Math.round(weather.main.temp)}°c
             
            </div>
            <div className='humidity'>
              <h4>Humdity</h4>
            {weather.main ? <p> {weather.main.humidity}%</p>:null}
            </div>
            <div className='humidity'>
              <h4>Feels Like</h4>
            {weather.main ? <p> {weather.main.feels_like}°F</p>:null}
            </div>
            <div className='humidity'>
              <h4>Wind Speed</h4>
            {weather.wind ? <p> {weather.wind.speed}MPH</p>:null}
            </div>
            <div className="humidity">
            <h4>Weather</h4>{weather.weather[0].main}
          
              </div>
            
          </div><footer>
      <div class="humidity">
                <h5>
                    Created by <b>@Youssouf ALI AHMED</b> - devchallenges.io
                </h5>
            </div>
        
      </footer>
 
        </div>
        ) : ('')}
              </main>
      
  
     
  
    </div>
  );
}

export default App;