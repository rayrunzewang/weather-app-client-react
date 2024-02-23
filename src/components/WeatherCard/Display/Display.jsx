import React from 'react'
import CurrentCity from './CurrentCity'
import LoadingScreen from '../../loadingScreen/LoadingScreen.jsx';
import './display.scss'

const Display = ({ isLoading, onAdd, weather, flagImagUrl }) => {
  const currentDate = new Date();
  const hours = currentDate.getHours();

  return (

    <div className='Home__dashboard'>
      {isLoading ? (
        <LoadingScreen></LoadingScreen>
      ) : (
        weather ? (
          <div>
            <CurrentCity weatherData={weather} onClick={onAdd} flagImagUrl={flagImagUrl} >
            </CurrentCity>
            <ul className='Home__dashboard-temp-ul'>
              {weather && (
                  weather.list.slice(0, 8)).map((item, index) => <li key={index} style={{ height: `${item.main.temp * 4}px` }}>{Math.round(item.main.temp) + '  °C'}</li>
                  )}
            </ul>
            <ul className='Home__dashboard-time-ul'>
              {weather && weather.list.slice(0, 8).map((item, index) => (
                <li key={index}>
                  {new Date(item.dt_txt).getHours() < 13 ? new Date(item.dt_txt).getHours() + 11 + ' : 00' : new Date(item.dt_txt).getHours() - 11 + ' : 00'}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div style={{color: 'orange', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Please Search or Select A City...</div>
        )
      )}
    </div>
  )
}

export default Display