import React from 'react'
import { CCard, CCardBody,  CCol } from '@coreui/react'
import DataTable from 'src/components/dataTable'
import { RegulationsHeaders } from 'src/components/dataTable/TableHeaders'
import { useNavigate } from 'react-router-dom'
import { useFetchRegulationsQuery } from 'src/api'
import Paginations from 'src/components/pagination'
import { useDispatch } from 'react-redux'
import { regulation } from 'src/slices/Regulation'
import PageHeaderContainer from 'src/components/pageHeader'




const Regulation = () => {
 const navigate = useNavigate()

 const {data, isLoading} = useFetchRegulationsQuery('regulations')

 const dispatch = useDispatch()

  const handleViewItem = (data) => {
    navigate('/regulations/view-regulation', {state: {details: data}})
    dispatch(regulation(data))
  }

  const handleAddButton = () => {
    navigate('/regulations/new-regulation')
 }

 const handleUpdateItem = () => {
  
 }

  return (
    <CCol xs={12}>
      <PageHeaderContainer buttonTitle="Add a new Regulation" handleAddButton={handleAddButton}/>
      <CCard className="mb-4">
        <CCardBody>
          <DataTable
            headers={RegulationsHeaders}
            data={data?.data[0]?.regulations}
            handleViewItem={handleViewItem}
            isLoading={isLoading}
            handleUpdateItem={handleUpdateItem}
          />
        </CCardBody>
      </CCard>
      <Paginations page={0}/>
    </CCol>
  )
}

export default Regulation
