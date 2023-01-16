
import search_icon from '../assets/images/search-icon.svg'





const SearchEntity = ({handleClearSearch,setSearchValue, handleSearch,searchValue }) => {
  return (
    <div className="content-header-section">
      <div className="search-container">
      <span
          onClick={handleClearSearch}
          style={{
            visibility: searchValue === '' ? 'hidden' : '',
          }}
        >
          clear
        </span>
        <input
          placeholder="Quick search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <img src={search_icon} className="search-icon" onClick={handleSearch} />

      </div>
    </div>
  )
}

export default SearchEntity
