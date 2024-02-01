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

async function postAddCity(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    console.log(responseData)
  } catch (error) {
    console.error(error)
  }
}

export {getWeatherData, postAddCity};