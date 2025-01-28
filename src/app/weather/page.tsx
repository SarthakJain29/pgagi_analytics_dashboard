"use client";

import { useState, useEffect } from 'react';
import { getCurrentWeather } from '@/services/weatherService'; // The service you created to fetch data
import TemperatureChart from '@/components/TemperatureChart'; // Your chart component

const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState<any>(null); // State to store weather data
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await getCurrentWeather('London'); // Call the weather service with a default city (e.g., London)
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, []); // Empty array means this effect runs once on component mount

  if (loading) {
    return <div>Loading weather data...</div>;
  }

  if (!weatherData) {
    return <div>No weather data available.</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold">Weather Information</h2>
      <div className="weather-data">
        <div>Temperature: {weatherData.main.temp}°C</div>
        <div>Humidity: {weatherData.main.humidity}%</div>
        <div>Wind Speed: {weatherData.wind.speed} m/s</div>

        {/* Render your chart with data */}
        <TemperatureChart data={weatherData.daily} />
      </div>
    </div>
  );
};

export default WeatherPage;
