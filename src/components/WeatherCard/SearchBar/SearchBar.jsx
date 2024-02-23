import Input from './Input'
import SearchButton from './SearchButton'
import './searchBar.scss'

const SearchBar = ({inputValue, onInputChange, onSearch}) => {

  return (
    <div className='search-bar'>
      <div className='search-bar__input-container'>
        <Input value={inputValue} onChange={onInputChange} placeHolder={'Search City'}></Input>
      </div>
      <div className='search-bar__button-container'>
        <SearchButton onClick={onSearch}>Search</SearchButton>
      </div>

    </div>
  )
}

export default SearchBar