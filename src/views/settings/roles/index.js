import { CCard, CCardBody, CCol } from "@coreui/react"
import PageHeaderContainer from 'src/components/pageHeader'
import DataTable from 'src/components/dataTable'
import { usersHeaders } from 'src/components/dataTable/TableHeaders'
import CreateRoleModal from "./createRoleModal"
import { useState } from 'react'

const Roles = () => {

const [createRoleModal, setRoleModal] = useState(false)

 const handleModal = () => {
  setRoleModal(prev => !prev)
 }

  const handleViewItem = (data) => {

  }

  const handleDeleteItem = () => {
    
  }

 return(
    <CCol sx={12}>
      <PageHeaderContainer buttonTitle="Add a role" handleAddButton={handleModal}/>
        <CCard className="mb-4">
        <CCardBody>
          <DataTable
            headers={usersHeaders}
            // data={{}}
            handleViewItem={handleViewItem}
            // isLoading={isLoading}
            handleDeleteItem={handleDeleteItem}
          />
        </CCardBody>
        </CCard>
        <CreateRoleModal visible={createRoleModal} close={()=> setRoleModal(false)}/>
    </CCol>
 )
}


export default Roles