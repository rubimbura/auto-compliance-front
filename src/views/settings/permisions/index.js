import { CCard, CCardBody, CCol } from "@coreui/react"
import PageHeaderContainer from 'src/components/pageHeader'
import DataTable from 'src/components/dataTable'
import { permissionsHeaders } from 'src/components/dataTable/TableHeaders'
import CreatePermissionModal from "./createPermissionModal"
import { useState } from 'react'
import { useFetchPermissionsQuery } from 'src/api'

const Permissions = () => {

  const [createModal, setCreateModal] = useState()
  const {data, isLoading} = useFetchPermissionsQuery()

 const handleModal = () => {
  setCreateModal(prev => !prev)
 }

  const handleViewItem = (data) => {

  }

  const handleDeleteItem = () => {
    
  }

 
 return(
    <CCol sx={12}>
      <PageHeaderContainer buttonTitle="Add a permision" handleAddButton={handleModal}/>
        <CCard className="mb-4">
        <CCardBody>
          <DataTable
            headers={permissionsHeaders}
            data={data?.data[0]?.permissions}
            handleViewItem={handleViewItem}
            isLoading={isLoading}
            handleDeleteItem={handleDeleteItem}
          />
        </CCardBody>
        </CCard>
        <CreatePermissionModal visible={createModal} close={() => setCreateModal(false)}/>
    </CCol>
 )
}


export default Permissions