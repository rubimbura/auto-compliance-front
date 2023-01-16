import Table from 'react-bootstrap/Table'
import { CSpinner } from '@coreui/react'
import sort_up from '../../assets/images/sort-up.svg'
import sort_down from '../../assets/images/sort-down.svg'

const DataTable = ({
  headers,
  data,
  handleViewItem,
  isLoading,
  handleSortUp,
  handleSortDown,
}) => {
  let displayHeaders = []
  if (headers?.length > 0) {
    displayHeaders = headers.map((el) => {
      return (
        <th>
          <div className="d-flex">
            <div>{el.label || '-'}</div>
            <div className="table-sort-container ml-2">
              {el.isSort && (
                <>
                  <img src={sort_up} onClick={handleSortUp} />
                  <img src={sort_down} onClick={handleSortDown} />
                </>
              )}
            </div>
          </div>
        </th>
      )
    })
  }

  let displayBody = []
  if (data?.length > 0) {
    displayBody = data.map((row, id) => {
      let newObj = Object.assign({}, row)
      newObj.actions = (
        <>
          <button className='data-table-view-btn' onClick={() => handleViewItem(row)}>View</button>
        </>
      )
      return (
        <tr>
          {headers.map((el) => {
            return <td className={newObj[el.value]}> {newObj[el.value] || '-'}</td>
          })}
        </tr>
      )
    })
  }

  return (
    <Table  hover>
      <thead>
        <tr>{displayHeaders}</tr>
      </thead>
      <br/>
      <tbody>
        {isLoading ? (
          <tr>
            <td colSpan={7}>
              <CSpinner color="warning" style={{ margin: 'auto', display: 'flex' }} />
            </td>
          </tr>
        ) : (
          displayBody
        )}
      </tbody>
    </Table>
  )
}

export default DataTable
