import { CCard, CCardBody, CCol } from "@coreui/react"
import PageHeaderContainer from 'src/components/pageHeader'
import DataTable from 'src/components/dataTable'
import { RolesHeaders } from 'src/components/dataTable/TableHeaders'
import CreateRoleModal from "./createRoleModal"
import { useState } from 'react'
import { useFetchRolesQuery } from 'src/api'

const Roles = () => {

const [createRoleModal, setRoleModal] = useState(false)
const { data, isLoading } = useFetchRolesQuery()
const [details, setDetails] = useState()

 const handleModal = () => {
  setRoleModal(prev => !prev)
 }

  const handleViewItem = (data) => {

  }

  const handleDeleteItem = () => {
    
  }

  const handleUpdateItem = (details) => {z
    setRoleModal(prev => !prev)
    setDetails(details)
  }

 return(
    <CCol sx={12}>
      <PageHeaderContainer buttonTitle="Add a role" handleAddButton={handleModal}/>
        <CCard className="mb-4">
        <CCardBody>
          <DataTable
            headers={RolesHeaders}
            data={data?.roles}
            handleViewItem={handleViewItem}
            isLoading={isLoading}
            handleDeleteItem={handleDeleteItem}
            hasViewBtn
            hasEditBtn
            handleUpdateItem={handleUpdateItem}
          />
        </CCardBody>
        </CCard>
        <CreateRoleModal 
          visible={createRoleModal} 
          close={()=> {setRoleModal(false); setDetails('')}}
          details={details}
        />
    </CCol>
 )
}


export default Roles