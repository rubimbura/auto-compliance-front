import React, {useState, useEffect} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {  cibMinutemailer } from '@coreui/icons'

import { useNavigate } from 'react-router-dom'
// import { useResetMutation } from '../../../api'
import NotificationMessage from 'src/components/NotificationMessage'






const Login = () => {



  const [user, setUser] = useState({
    email: '',
  })

  const navigate = useNavigate()

  // const [resetPassword, {data, isLoading, isSuccess, isError, error}] = useResetMutation()

  const [userToken, setUserToken] = useState('')

  const [notificationMessage, 
    setNoticationMessage] = useState('')


  useEffect(()=>{

    if(error){
      setNoticationMessage(error?.error)
    }
    
  },[isSuccess, isError])

  const handleResetPassword = () => {
    // if(user.email !== ''){
    // resetPassword(user.email)
    // }
  }

  




  return (
    <div className="min-vh-100 d-flex flex-row align-items-center login-container">
      <CContainer>

        <CRow className="justify-content-center" style={{marginBottom: '60px'}}>
          <CCol md={5}>

           {notificationMessage !== '' && <NotificationMessage message={notificationMessage}/>}

            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Reset password</h1>
                    <p className="text-medium-emphasis">Enter you email to reset password</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cibMinutemailer} />
                      </CInputGroupText>
                      <CFormInput 
                      placeholder="email" 
                      autoComplete="email"
                      onChange={(e)=>setUser({
                        ...user,
                        email: e.target.value
                      })} 
                      />
                    </CInputGroup>
                    <div style={{width: '100%'}}>
                        <CButton 
                          onClick={handleResetPassword} 
                          style={{width: '100%', backgroundColor: '#015EC6', outline: 'none'}}>
                          Send instructions
                        </CButton>
                    </div>
                    <div
                        style={{width: '100%', display: 'flex', justifyContent: 'center'}}
                        >
                      <span 
                        onClick={()=> navigate('/')} 
                        style={{cursor: 'pointer'}}
                        color="link" className="forgot-password-link">
                        Login
                      </span>
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

export default Login
