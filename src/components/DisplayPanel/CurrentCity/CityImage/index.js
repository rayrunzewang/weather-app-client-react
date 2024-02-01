import React from 'react'
import './cityImage.scss'

const index = ({ cityData, onClick, flagImagUrl }) => {



  return (
    <div className='cityImageContainer'>
      <div className='city-info'>
        <h1>{cityData.name.toUpperCase()}</h1>
        <img className='country-flag' src={flagImagUrl} alt="flag" />
      </div>
      <button className='save-button' onClick={onClick} >Add to collection</button>
      <p>Timezone: GMT {cityData.timezone > 0 ? "+" : ""} {cityData.timezone / 3600}</p>
      <p> {cityData.coord.lat.toString().split("")[0] === "-" ? "S " + cityData.coord.lat.toString().split("").slice(1).join("") : "N " + cityData.coord.lat}</p>
      <p> {cityData.coord.lon.toString().split("")[0] === "-" ? "E " + cityData.coord.lon.toString().split("").slice(1).join("") : "W " + cityData.coord.lon}</p>
    </div>
  )
}

export default index