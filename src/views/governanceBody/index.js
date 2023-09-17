import {
  CCard,
  CCardBody,
  CCol
} from '@coreui/react'

import { useFetchGovernanceBodyQuery } from 'src/api'
import DataTable from 'src/components/dataTable'
import { governanceBodiesHeaders } from 'src/components/dataTable/TableHeaders'
import PageHeaderContainer from 'src/components/pageHeader'
import AddGovernanceBodyModal from './AddGovernanceBodyModal'
import { useState } from 'react'


const GovernanceBodies = () => {

  const { data, isLoading } = useFetchGovernanceBodyQuery()
  const [addModal, setAddModal] = useState(false)
  const [details, setDetails] = useState()

  const handleAddButton = () => {
    setAddModal(prev => !prev)
    setDetails('')
  }

  const handleUpdateItem = (data) => {
    setDetails(data)
    setAddModal(prev => !prev)
  }

  return(
    <CCol xs={12}>
      <PageHeaderContainer hasDasborad={false} buttonTitle="Add a new governance body" handleAddButton={handleAddButton}/>
      <CCard className="mb-4">
        <CCardBody>
        <DataTable
          headers={governanceBodiesHeaders}
          data={data?.data && data?.data[0]?.governanceBodies}
          hasEditBtn={true}
          handleUpdateItem={handleUpdateItem}
          isLoading={isLoading}
        />
        </CCardBody>
      </CCard>
      <AddGovernanceBodyModal 
        close={() => setAddModal(false)} 
        visible={addModal}
        details={details}
      />
    </CCol>
  )
}

export default GovernanceBodies