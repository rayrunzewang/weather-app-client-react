import React from 'react'

const CollectionList = ({cityCollection, onCityClick, onDeleteClick}) => {
  return (
      <div className='collection-panel'>
        <p className='collection-panel-title'>Collections</p>
        <ul className='collection-ul'>
          {cityCollection &&
            cityCollection.map((item) => {
              return <li className='collection-li' key={item._id} >
                <span className='collection-li-item' onClick={()=>onCityClick(item)}>{`${item.cityName.toUpperCase()}, ${item.countryName.toUpperCase()}`}</span>
                <span className='delete-button' onClick={()=>onDeleteClick(item)}>x</span>
              </li>
            })
          }
        </ul>
      </div>
  )
}

export default CollectionList