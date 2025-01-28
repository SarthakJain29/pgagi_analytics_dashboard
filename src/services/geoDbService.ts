// src/services/geoDbService.ts

const API_KEY = "81a67f45d3a4a43f75d2c09883f8b2db";

export const getCitySuggestions = async (query: string) => {
  const response = await fetch(
    `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${query}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      },
    }
  );
  const data = await response.json();
  return data.data;
};
