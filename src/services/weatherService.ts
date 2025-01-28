// src/services/weatherService.ts

const API_KEY = "a323ae0ea8828ddae25ef977f1a30575";  
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// Fetch current weather by city
export const getCurrentWeather = async (city: string) => {
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  const data = await response.json();
  return data;
};

// Fetch 7-day weather forecast by city
export const getWeatherForecast = async (city: string) => {
  const response = await fetch(
    `${BASE_URL}/forecast/daily?q=${city}&cnt=7&appid=${API_KEY}&units=metric`
  );
  const data = await response.json();
  return data;
};
