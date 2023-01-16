import { CFormSelect } from '@coreui/react'

const NumberOfentries = ({ allData, entry, setEntry }) => {

  const sortNumber = [
    {
      label: 10,
      value: 10
    },
    {
      label: 25,
      value: 25
    },
    {
      label: 50,
      value: 50
    },
    {
      label: 100,
      value: 100
    },
  ]

  const calculateRage = () => {
    let currentPage
    if (entry === 10) {
      currentPage = 1
    } else {
      currentPage = entry - 9
    }
    return `${currentPage} to ${entry}`
  }


  return (
    <div className="number-of-pages-container">
      <span className="showing-results-text">
        Showing {calculateRage()} of {allData?.totalItem || allData.recordsTotal } entries
      </span>
      <div className="select-fields-container">
        <span className="showing-results-text mr-2">Number of entries</span>
        <CFormSelect
          style={{ width: '30%' }}
          aria-label="Default select example"
          options={sortNumber}
          onChange={(e) => setEntry(e.target.value)}
          value={entry}
        />
      </div>
    </div>
  )
}

export default NumberOfentries
