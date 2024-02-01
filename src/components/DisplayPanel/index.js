import React from 'react'
import './displayPanel.scss'
import CurrentCity from './CurrentCity'


const Dashboard = ({ cityData, onClick, weatherData, onAddCollectionItem, flagImagUrl }) => {
  const currentDate = new Date();
  const hours = currentDate.getHours();


  return (
    <>
        <div className='Home__dashboard'>
          <CurrentCity cityData={cityData} weatherData={weatherData} AddCollectionItem={onAddCollectionItem} onClick={onClick} flagImagUrl={flagImagUrl} >
          </CurrentCity>
          <ul className='Home__dashboard-temp-ul'>
            {weatherData &&
              (
                weatherData.list.slice(0, 8)).map((item, index) => <li key={index} style={{ height: `${item.main.temp * 4}px` }}>{Math.round(item.main.temp) + '  °C'}</li>
                )
            }
          </ul>
          <ul className='Home__dashboard-time-ul'>
            {weatherData && weatherData.list.slice(0, 8).map((item, index) => (
              <li key={index}>
                {new Date(item.dt_txt).getHours() < 13 ? new Date(item.dt_txt).getHours() + 11 + ' : 00' : new Date(item.dt_txt).getHours() - 11 + ' : 00'}
              </li>
            ))}
          </ul>
        </div>

    </>

  )
}

export default Dashboard