import CollectionListContainer from './component/CollectionListContainer/index.jsx'
import ToggleButton from './component/ToggleButton/index.jsx'
import useToggle from './hook/useToggle.js'
import './collection.scss'

const Collection = ({ isLoading, onItemClick, collection, onCityDelete }) => {
  const [isCollectionVisible, toggle] = useToggle(true);

  return (
    <div className={`collection__ul-container  ${isCollectionVisible && 'collection__ul-container--show'}`} >

      <CollectionListContainer isLoading={isLoading} collection={collection} onItemClick={onItemClick} /* onCityDelete={onCityDelete} */ />
      <div className='collection__toggle-container'>
        <ToggleButton isCollectionVisible={isCollectionVisible} onClick={toggle}>{!isCollectionVisible? 'Collection' : 'X' }</ToggleButton >
      </div>

    </div>
  )
}

export default Collection