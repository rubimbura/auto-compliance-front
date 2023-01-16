import React, {useState, useEffect} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CRow,
} from '@coreui/react'
import { useNavigate } from 'react-router-dom'
// import { useActivateAccountMutation } from '../../../api'



const {REACT_APP_D_CORE_URL} = process.env;

const AppUrl = REACT_APP_D_CORE_URL


const VerifyAccount = () => {


  const params = new URLSearchParams(window.location.search)
  const otp = params.get('otp')


  // const [activateAccount, {data, isLoading, isSuccess, isError}] = useActivateAccountMutation()


  const [notificationMessage, 
    setNoticationMessage] = useState('')


  useEffect(() =>{
    // if(otp){
    //   activateAccount(otp)
    // }
  },[otp])


  useEffect(()=>{
    setNoticationMessage()
  },[isSuccess, isError])





  return (
    <div className="min-vh-100 d-flex flex-row align-items-center login-container">
      <CContainer>
        <CRow className="justify-content-center" style={{marginBottom: '60px'}}>
          <CCol md={5}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <p className="text-medium-emphasis" style={{textAlign: 'center', fontSize: 20}}>Your account has been activated</p>
               
                    <div style={{width: '100%', marginTop: 50}}>
                        <CButton 
                          onClick={()=>window.open(`${AppUrl}`)} 
                          style={{width: '100%', backgroundColor: '#015EC6', outline: 'none'}}>
                          Login
                        </CButton>
                    </div>

                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default VerifyAccount
