import React from 'react'
import './cityImage.scss'
import { addCollectionItem } from '../../../../services/api/weatherApi.js'
import { FLAG_API, FLAG_IMAGE } from '../../../../services/api/flagApi.js'

const index = ({ cityData, onAddCollectionItem }) => {
  console.log()

  // 获取城市信息
  // fetch 图片
  const handleClick = () => {
    // Post Logic in api service
    let url = "http://localhost:3001/api/v1/city";
    let data = {
      cityName: cityData.name,
      countryName: cityData.country
    };
    addCollectionItem(url, data);
    onAddCollectionItem()
  }

  return (
    <div className='cityImageContainer'>
      <div className='city-info'>
        <h1>{cityData.name.toUpperCase()}</h1>
        <img className='country-flag' src={FLAG_API + cityData.country + FLAG_IMAGE} alt="flag" />
      </div>
      <button className='save-button' onClick={handleClick} >Add to collection</button>
      <p>Timezone: GMT {cityData.timezone > 0 ? "+" : ""} {cityData.timezone / 3600}</p>
      <p> {cityData.coord.lat.toString().split("")[0] === "-" ? "S " + cityData.coord.lat.toString().split("").slice(1).join("") : "N " + cityData.coord.lat}</p>
      <p> {cityData.coord.lon.toString().split("")[0] === "-" ? "E " + cityData.coord.lon.toString().split("").slice(1).join("") : "W " + cityData.coord.lon}</p>


    </div>
  )
}

export default index