import { CCard, CCardBody,  CCol } from '@coreui/react'
import DataTable from 'src/components/dataTable'
import { useFetchRegulationsQuery } from 'src/api'
import { useDispatch } from 'react-redux'
import { regulation } from 'src/slices/Regulation'
import { RegulationsHeaders } from 'src/components/dataTable/TableHeaders'
import { useNavigate } from 'react-router-dom'




const UserRegulation = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {data, isLoading} = useFetchRegulationsQuery('regulations')

  const handleViewItem = (data) => {
    navigate('/user/regulations/assesment', {state: {details: data}})
   //  dispatch(regulation(data))
  }
   return(
    <CCol xs={12}> 
      <CCard className="mb-4">
        <CCardBody>
          <DataTable
            headers={RegulationsHeaders}
            data={data?.data[0]?.regulations}
            handleViewItem={handleViewItem}
            isLoading={isLoading}
          />
        </CCardBody>
      </CCard>
    </CCol>
   )   
}

export default UserRegulation