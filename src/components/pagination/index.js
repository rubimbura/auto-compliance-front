import React from 'react'
import {
  CPagination,
  CPaginationItem,
  CRow,
} from '@coreui/react'

import  { ExportToExcel } from 'src/components/ExportToExcel'


const Paginations = ({page, handleNext, handlePrevious, excelData,fileName}) => {




  
  return (
    <CRow className='mb-2'>
      <div style={{display:'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        {/* <div className='export-excel-container'>
          <span>export</span>
          <div className='icon-ctn'>
            <ExportToExcel apiData={excelData} fileName={fileName} />
          </div>
        </div> */}
        <div></div>
        <CPagination className="justify-content-end" aria-label="Page navigation example">
          <CPaginationItem 
            style={{cursor: 'pointer'}}
            onClick={handlePrevious}
            disabled={page <= 0 ? true: false}>Previous</CPaginationItem>
          <CPaginationItem>{page}</CPaginationItem>
          <CPaginationItem
            style={{cursor: 'pointer'}}
            onClick={handleNext}>Next</CPaginationItem>
        </CPagination>
      </div>
    </CRow>
  )
}

export default Paginations
