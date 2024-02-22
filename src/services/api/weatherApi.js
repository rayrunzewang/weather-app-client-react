
async function getWeather(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city}&appid=${process.env.REACT_APP_API_KEY}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Weather API request failed for ${city}: ${response.statusText}`);

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
    return responseData
  } catch (error) {
    console.error(error)
  }
}

export {getWeather, postAddCity};