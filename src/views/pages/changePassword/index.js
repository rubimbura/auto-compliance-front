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
import { cilLockLocked, cilUser } from '@coreui/icons'
import axios from 'axios'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'

// import {useVerifyLinkMutation, useChangePasswordMutation} from '../../../api'



const Login = () => {

  
    // const [verifyLink, {data: verifyLinkData}] = useVerifyLinkMutation()
    // const [changePassword, {data, isLoading, isSuccess}] = useChangePasswordMutation()


  const [user, setUser] = useState({
    password: '',
    confirmPassword: ''
  })

  const navigate = useNavigate()


  const params = new URLSearchParams(window.location.search)
  const token = params.get('token')

  useEffect(() =>{
    // if(token){
    //     verifyLink(token)
    // }
  },[token])



  const handleReset = () => {
    if(user.password !== '' && user.confirmPassword !== ''){
        // if(user.password === user.confirmPassword){
        //     changePassword({password:user.password, token})
        // }
    }
  }

  

  return (
    <div className="min-vh-100 d-flex flex-row align-items-center login-container">
      <CContainer>
        <CRow className="justify-content-center" style={{marginBottom: '60px'}}>
          <CCol md={5}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Change password</h1>
                    <p className="text-medium-emphasis">Enter new password</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput 
                      placeholder="Password"
                      type='password' 
                      autoComplete="password"
                      onChange={(e)=>setUser({
                        ...user,
                        password: e.target.value
                      })} 
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Confirm password"
                        autoComplete="current-password"
                        onChange={(e) => setUser({
                          ...user,
                          confirmPassword: e.target.value
                        })}
                      />
                    </CInputGroup>
                    <div style={{width: '100%'}}>
                        <CButton 
                          onClick={handleReset} 
                          style={{width: '100%', backgroundColor: '#015EC6', outline: 'none'}}>
                          Login
                        </CButton>
                    </div>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                      <span color="link" className="forgot-password-link">
                        Did you forget password?
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
