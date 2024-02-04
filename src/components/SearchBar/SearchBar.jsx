import Input from './Input'
import SearchButton from './SearchButton'
import './searchBar.scss'

const SearchBar = (props) => {

  const {
    inputCityRef,
    inputCountryRef,
    cityInfo,
    handleCityInputChange,
    handleCountryInputChange,
    onSearch } = props

  const currentDate = new Date().toLocaleString();

  return (
    <div className='search-bar'>
      <div>
        <h1 className='search-bar__logo'>Weather</h1>
      </div>
      <div className='search-bar__input-container'>
        <Input ref={inputCityRef} value={cityInfo.cityName} onChange={handleCityInputChange} placeHolder={'City Name'}></Input>
        <Input ref={inputCountryRef} value={cityInfo.countryName} onChange={handleCountryInputChange} placeHolder={'Country Code'}></Input>
      </div>
      <div className='search-bar__button-container'>
        <SearchButton onClick={onSearch}>Search</SearchButton>
      </div>
      <div>
        <p className='search-bar__clock'>{currentDate}</p>
      </div>
    </div>
  )
}

export default SearchBar