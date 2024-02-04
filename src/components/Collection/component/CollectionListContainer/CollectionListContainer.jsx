import './collectionListContainer.scss'

const CollectionListContainer = ({ cityCollection, onCityClick, onCityDelete }) => {
  return (
    <div className='collection__list-container'>
      <p className='collection__title'>Collections</p>
      <ul className='collection__ul'>
        {cityCollection &&
          cityCollection.map((city) => {
            return <li className='collection__list' key={city._id} >
              <span className='collection__item' onClick={() => onCityClick(city)}>{`${city.cityName.toUpperCase()}, ${city.countryName.toUpperCase()}`}</span>
              <span className='collection__item-delete-button' onClick={() => onCityDelete(city)}>x</span>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default CollectionListContainer