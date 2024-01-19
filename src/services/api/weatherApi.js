async function getWeatherData(cityName, countryName) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${cityName},${countryName}&appid=052b37caae519c28d90953b5a30182ca`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Weather API request failed for ${cityName}: ${response.statusText}`);

    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default getWeatherData;