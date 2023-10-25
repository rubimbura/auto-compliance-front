
import  Button  from 'react-bootstrap/Button'
import React, {  useRef } from 'react'



const FilterComponent = ({setDate, date, handleFilter}) => {

  const refStart = useRef(null);
  const refEnd = useRef(null);



  const handleResetDate = () =>{
    refEnd.current.value = null
    refStart.current.value = null

  }

  return (
    <div className="d-flex filter-container mb-2">
      {/* { date.startDate !== '' && date.endDate !== '' &&
        <div onClick={handleResetDate}>
        <span className='reset-date-text mb-2'>Reset date</span>
      </div>} */}

     <div className='d-flex'>
        <div className="filter-date-container mr-4">
          <span className="showing-results-text mr-2">From</span>
          <input
            ref={refStart}
            type="date"
            onChange={(e) =>
              setDate({
                ...date,
                startDate: e.target.value,
              })
            }
          />
        </div>

        <div className="filter-date-container">
          <span className="showing-results-text mr-2">To</span>
          <input
            ref={refEnd}
            type="date"
            onChange={(e) =>
              setDate({
                ...date,
                endDate: e.target.value,
              })
            }
          />
        </div>
        <Button 
          className="filter-btn" 
          variant='primary'
          onClick={handleFilter}
          >
          Filter
        </Button>
      </div>
    </div>
  )
}

export default FilterComponent
