import LocationList from './LocationList/LocationList'
import './ListContainer.scss'

export const ListContainer = ({ isLoading, collection, onItemClick, onDelete }) => {
  return (
    <div className='collection__list-container'>
      <h3 className='collection__title'>Collection</h3>
      <ul className='collection__ul'>
        <LocationList
          isLoading={isLoading}
          collection={collection}
          onItemClick={onItemClick}
          onDelete={onDelete}
          />
      </ul>
    </div>
  )
}