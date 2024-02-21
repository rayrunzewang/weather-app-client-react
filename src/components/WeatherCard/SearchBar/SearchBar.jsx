import Input from './Input'
import SearchButton from './SearchButton'
import './searchBar.scss'

const SearchBar = ({onInputChange, onSearch}) => {

  return (
    <div className='search-bar'>
      <div className='search-bar__input-container'>
        <Input onChange={onInputChange} placeHolder={'City Name'}></Input>
        <Input onChange={onInputChange} placeHolder={'Country Code'}></Input>
      </div>
      <div className='search-bar__button-container'>
        <SearchButton onClick={onSearch}>Search</SearchButton>
      </div>

    </div>
  )
}

export default SearchBar