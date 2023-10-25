import './index.scss'

const SearchContainer = ({
  handleSearch, 
  placeholder, 
  handleChange,
  isLoading
}) => {
  return(
    <div className='search-item-container'>
      <input placeholder={placeholder} onChange={(e) => handleChange(e.target.value)}/>
      <button className={`${isLoading ? 'search-btn-loader' : ''}`} disabled={isLoading} onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchContainer