import React from 'react'
import { CCard, CCardBody,  CCol, CButton } from '@coreui/react'
import DataTable from 'src/components/dataTable'
import { RegulationsHeaders } from 'src/components/dataTable/TableHeaders'
import { useNavigate } from 'react-router-dom'
import { useFetchRegulationsQuery } from 'src/api'
import Paginations from 'src/components/pagination'




const Regulation = () => {
 const navigate = useNavigate()

 const {data, isLoading} = useFetchRegulationsQuery('regulations')

  const handleViewItem = (data) => {
    navigate('/regulations/view-regulation', {state: {details: data}})
  }

  return (
    <CCol xs={12}>
      <div>
        <CButton
          style={{
            backgroundColor: '#ECAA00',
            outline: 'none',
            border: 'none',
            color: 'black',
            fontWeight: 'bold',
            display: 'flex',
            marginLeft: 'auto',
            marginBottom: 20,
          }}
          onClick={()=> navigate('/regulations/new-regulation')}
        >
          Add a new regulation
        </CButton>
      </div>
      <CCard className="mb-4">
        {/* <CCardHeader>
          <SearchEntity/>
        </CCardHeader> */}
        <CCardBody>
          <DataTable
            headers={RegulationsHeaders}
            data={data?.data[0]?.regulations}
            handleViewItem={handleViewItem}
          />
        </CCardBody>
      </CCard>
      <Paginations page={0}/>
    </CCol>
  )
}

export default Regulation
