


import {
  CCard,
  CCardBody,
  CCol
} from '@coreui/react'

import { useFetchsubsidiariesQuery } from 'src/api'
import DataTable from 'src/components/dataTable'
import { subsidiariesHeaders } from 'src/components/dataTable/TableHeaders'
import PageHeaderContainer from 'src/components/pageHeader'
import { useState } from 'react'
import AddSubsidiaryModal from './AddSubsidiaryModal'


const Subsidiaries = () => {

  const { data, isLoading } = useFetchsubsidiariesQuery()
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
      <PageHeaderContainer hasDasborad={false} buttonTitle="Add a new subsidiary" handleAddButton={handleAddButton}/>
      <CCard className="mb-4">
        <CCardBody>
        <DataTable
          headers={subsidiariesHeaders}
          data={data?.data && data?.data[0]?.subsidiaries}
          hasEditBtn={true}
          handleUpdateItem={handleUpdateItem}
          isLoading={isLoading}
        />
        </CCardBody>
      </CCard>
      <AddSubsidiaryModal 
        close={() => setAddModal(false)} 
        visible={addModal}
        details={details}
      />
    </CCol>
  )
}

export default Subsidiaries