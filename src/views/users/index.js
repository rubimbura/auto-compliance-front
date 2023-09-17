import { CCard, CCardBody, CCol } from "@coreui/react"
import PageHeaderContainer from 'src/components/pageHeader'
import DataTable from 'src/components/dataTable'
import { usersHeaders } from 'src/components/dataTable/TableHeaders'
import CreateUserModal from "./CreateUserModal"
import ViewUserModal from "./ViewuserModal"
import { useState } from "react"
import { useFetchUsersQuery } from '../../api'


const Users = () => {

const [userModal, showUserModal] = useState(false)
const [viewModal, setViewModal] = useState(false)
const {data, isLoading} = useFetchUsersQuery('test')
const [userDetails, setUserDetails] = useState('')

 const handleModal = () => {
    showUserModal(true)
 }

  const handleViewItem = (data) => {
    setViewModal(true)
    setUserDetails(data)
  }

  const handleDeleteItem = () => {
    
  }

 return(
    <CCol sx={12}>
      <PageHeaderContainer buttonTitle="Add A user" handleAddButton={handleModal}/>
        <CCard className="mb-4">
        <CCardBody>
          <DataTable
            headers={usersHeaders}
            data={data?.data[0]?.users}
            handleViewItem={handleViewItem}
            isLoading={isLoading}
            handleDeleteItem={handleDeleteItem}
            hasViewBtn={true}
            hasDeleteBtn={true}
          />
        </CCardBody>
        </CCard>
        <CreateUserModal 
          close={() => showUserModal(false)} 
          visible={userModal}
        />
        <ViewUserModal 
          close={() => setViewModal(false)} 
          visible={viewModal}
          data={userDetails}
        />
    </CCol>
 )
}


export default Users