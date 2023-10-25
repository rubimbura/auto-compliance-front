
import './index.scss'


const FilterComponent = ({label, menuItems, handleChange}) => {

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    handleChange(selectedValue);
  }

  return (
    <div className="filter-component-container">
      <span>{ label } </span>
      <select onChange={handleSelectChange}>
        {menuItems?.map(el => {
          return(
            <option value={el.id}>{el.label}</option>
          )
        })}
      </select>
    </div>
  )
}

export default FilterComponent