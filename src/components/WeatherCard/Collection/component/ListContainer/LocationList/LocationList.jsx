import { LoadingScreen } from '../../../../../loadingScreen/LoadingScreen'

const LocationList = ({ isLoading, collection, onItemClick, onDelete }) => {
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        collection.length === '0' ? (
          <p>Not Collection yet...</p>
        ) : (
          collection.map(location => (
            <li className='collection__list' key={location._id} >
              <span
                className='collection__item'
                onClick={() => onItemClick(location)}
              >{`${location.city.toUpperCase()}, ${location.country.toUpperCase()}`}</span>
              <span
                className='collection__item-delete-button'
                onClick={() => onDelete(location)}
              >x</span>
            </li>)
          ))
      )}
    </>
  )
}

export default LocationList