import React from 'react'
import {
  CPagination,
  CPaginationItem,
  CRow,
} from '@coreui/react'

import  { ExportToExcel } from 'src/components/ExportToExcel'


const Paginations = ({page, handleNext, handlePrevious, excelData,fileName}) => {




  
  return (
    <CRow className='mb-4'>
      <div style={{display:'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 20}}>
        {/* <div className='export-excel-container'>
          <span>export</span>
          <div className='icon-ctn'>
            <ExportToExcel apiData={excelData} fileName={fileName} />
          </div>
        </div> */}
        <div></div>
        <CPagination className="justify-content-end" aria-label="Page navigation example">
          <CPaginationItem
            className='pagination-text' 
            style={{cursor: 'pointer'}}
            onClick={handlePrevious}
            disabled={page <= 0 ? true: false}>Previous</CPaginationItem>
          <CPaginationItem className='pagination-text'>{page}</CPaginationItem>
          <CPaginationItem
            className='pagination-text' 
            style={{cursor: 'pointer'}}
            onClick={handleNext}>Next</CPaginationItem>
        </CPagination>
      </div>
    </CRow>
  )
}

export default Paginations
