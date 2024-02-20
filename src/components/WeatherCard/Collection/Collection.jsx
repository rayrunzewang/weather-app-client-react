import CollectionListContainer from './component/CollectionListContainer/index.jsx'
import ToggleButton from './component/ToggleButton/index.jsx'
import useToggle from './hook/useToggle.js'
import './collection.scss'

const Collection = ({ onCityClick, cityCollection, onCityDelete }) => {
  const [isCollectionVisible, toggle] = useToggle(true);

  return (
    <div className={`collection__ul-container  ${isCollectionVisible && 'collection__ul-container--show'}`} >

      <CollectionListContainer cityCollection={cityCollection} onCityClick={onCityClick} onCityDelete={onCityDelete} />
      <div className='collection__toggle-container'>
        <ToggleButton isCollectionVisible={isCollectionVisible} onClick={toggle}>Collection</ToggleButton >
      </div>

    </div>
  )
}

export default Collection