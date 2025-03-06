import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Pastikan file CSS ini diimpor

function App() {
  const [weather, setWeather] = useState(null);   // Menyimpan data cuaca
  const [city, setCity] = useState('');           // Menyimpan input kota dari user
  const [error, setError] = useState(null);       // Menyimpan pesan error jika API call gagal

  // Fungsi untuk mengambil data cuaca dari API OpenWeatherMap
  const fetchWeather = async () => {
    try {
      const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const response = await axios.get(url);
      setWeather(response.data);
      setError(null);  // Reset error jika berhasil
    } catch (err) {
      setError('City not found. Please try again.');
      setWeather(null);  // Reset data cuaca jika ada error
    }
  };

  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="weather-app">
      <header className="header">
        <h1>Weather App</h1>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={city}
            onChange={(e) => setCity(e.target.value)} 
            placeholder="Enter city"
          />
          <button type="submit">Get Weather</button>
        </form>
      </header>
      
      {error && <p className="error-message">{error}</p>}

      {weather && (
        <main className="weather-info">
          <div className="city-name">
            <h2>{weather.name}</h2>
          </div>
          <div className="weather-details">
            <img 
              id="weatherIcon" 
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} 
              alt={weather.weather[0].description}
            />
            <p id="temperature">Temperature: {weather.main.temp}°C</p>
            <p id="description">Description: {weather.weather[0].description}</p>
            <p id="humidity">Humidity: {weather.main.humidity}%</p>
            <p id="wind">Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
