import LoadingScreen from '../../../../loadingScreen/LoadingScreen'
import './collectionListContainer.scss'

const CollectionListContainer = ({ isLoading, collection, onItemClick, onDelete }) => {
  return (
    <div className='collection__list-container'>
      <h3 className='collection__title'>Collection</h3>
      <ul className='collection__ul'>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          collection.length === '0' ? (
            <p>Not Collection yet...</p>
          ) : (
            collection.map((city) => {
              return <li className='collection__list' key={city._id} >
                <span className='collection__item' onClick={() => onItemClick(city)}>{`${city.city.toUpperCase()}, ${city.country.toUpperCase()}`}</span>
                <span className='collection__item-delete-button' onClick={() => onDelete(city)}>x</span>
              </li>
            })
          )
        )}
      </ul>
    </div>
  )
}

export default CollectionListContainer