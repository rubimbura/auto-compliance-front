import { CCard, CCardBody, CCol } from "@coreui/react"
import { useFetchEvaluationsQuery } from 'src/api' 



const Evaluation = () => {

  const { data } = useFetchEvaluationsQuery()

  return(
    <CCol sx={12}>
      <CCard className="mb-4">
        <CCardBody>
              hello
        </CCardBody>
      </CCard>
    </CCol>
  )
}

export default Evaluation