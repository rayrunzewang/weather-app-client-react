import { ListContainer } from './component/ListContainer/index.js'
import { ToggleButton } from './component/ToggleButton'
import useToggle from './hook/useToggle.js'
import './collection.scss'

export const Collection = ({ isLoading, onItemClick, collection, onDelete }) => {
  const [isCollectionVisible, toggle] = useToggle(true);

  const toggleButtonText = isCollectionVisible ? 'X' : 'Collection';

  return (
    <div className={`collection-container  ${isCollectionVisible && 'collection-container--show'}`} >

      <ListContainer
        isLoading={isLoading}
        collection={collection}
        onItemClick={onItemClick}
        onDelete={onDelete}
      />
      <div className='collection__toggle-container'>
        <ToggleButton
          isCollectionVisible={isCollectionVisible}
          onClick={toggle}
        >{toggleButtonText}</ToggleButton >
      </div>
    </div>
  )
}
