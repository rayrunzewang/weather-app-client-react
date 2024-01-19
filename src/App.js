import React, { useState } from 'react';
import './App.scss';
import DisplayPanel from './components/DisplayPanel';
import Collection from './components/Collection';
import Search from './components/Search';
import Clear from './assets/Clear.jpg';
import Clouds from './assets/Clouds.jpg';
import Rain from './assets/Rain.jpg'

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherImage, setWeatherImage] = useState(Clear);
  const [cityData, setCityData] = useState(null);

  const handleSearch = (weatherData, cityData) => {
    setWeatherData(weatherData);
    setCityData(cityData);
    console.log('result: ', weatherData)
    const weather = weatherData.list[0].weather[0].main;

    let bgImg = Clear;
    switch (true) {
      case weather === "Clear":
        bgImg = Clear;
        break;
      case weather === "Clouds":
        bgImg = Clouds;
        break;
      case weather === "Rain":
        bgImg = Rain;
        break;
      default:
        bgImg = Clear;
    }
    setWeatherImage(bgImg)
  }

  return (
    <div className="home__container" style={{ backgroundImage: `url(${weatherImage})` }}>
      <Search onSearch={handleSearch} />
      <div className='main'>
        <Collection onSearch={handleSearch}></Collection>
        <DisplayPanel weatherData={weatherData} cityData={cityData} />
      </div>
    </div>
  );
}

export default App;
