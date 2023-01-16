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
import { useNavigate } from 'react-router-dom'
import NotificationMessage from 'src/components/NotificationMessage'
import OtpModal from '../otp'
import { useRequestNonceQuery } from 'src/api'
import { JSEncrypt } from 'jsencrypt'
import { useLoginMutation, useVerifyOtpMutation } from 'src/api'






const Login = () => {

  const navigate = useNavigate()


  const {data, isLoadingNonce, refetch} = useRequestNonceQuery('nonce')
  const [loginMutation, {data: loginData, isLoading, isError, error, isSuccess}] = useLoginMutation()
  const [verifyOtpMutation, {data: otpData, isLoading:otpLoader, isError: otpIsError, isSuccess: otpSuccess}] = useVerifyOtpMutation()


  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const [otpModal, setOtpModal] = useState(false)
  const [OTP, setOTP] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault()

    const encrypt = new JSEncrypt()
    encrypt.setPublicKey(data?.data[0].nonce)

    let username = encrypt.encrypt(user.username)
    let password = encrypt.encrypt(user.password)

    const encryptedPayload = {
      req: `${username}::::${password}::::${data?.data[0].nonce}`
    }
    loginMutation(encryptedPayload)
  }

  useEffect(() => {
    if(isSuccess){
      setOtpModal(!otpModal)
    }
    if(isError){
      refetch()
    }
  },[isSuccess, isError])
  
  useEffect(() => {
    if(otpSuccess){
      setOtpModal(false)
      navigate('/dashboard')
      sessionStorage.setItem('token', otpData.data[0]?.token)
    }
  },[otpSuccess])


  const handleSubmitOtp = (event) => {
    event.preventDefault()
    verifyOtpMutation({otpId: loginData?.data[0]?.otpId, otp:OTP})
  }

  return (
    <div className="min-vh-100 d-flex flex-row align-items-center login-container">
      <CContainer>
        
        <CRow className="justify-content-center" style={{marginBottom: '60px'}}>
          <CCol md={5}>
           {isError && <NotificationMessage message={error.data?.data[0]?.uiMessage} type="danger"/>}
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1 style={{textAlign: 'center'}}>Compliance System</h1>
                    <p className="text-medium-emphasis" style={{textAlign: 'center'}}>Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput 
                      placeholder="Username" 
                      autoComplete="username"
                      onChange={(e)=>setUser({
                        ...user,
                        username: e.target.value
                      })} 
                      required
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={(e) => setUser({
                          ...user,
                          password: e.target.value
                        })}
                        required
                      />
                    </CInputGroup>
                    <div style={{width: '100%'}}>
                        <CButton 
                          disabled={ isLoadingNonce  || isLoading}
                          type="submit"
                          style={{width: '100%', backgroundColor: '#015EC6', outline: 'none'}}>
                          Login
                        </CButton>
                    </div>
                    <div 
                      style={{width: '100%', display: 'flex', justifyContent: 'center'}}
                      >
                      <span 
                        style={{ cursor: 'pointer'}}
                        onClick={()=>navigate('/recover-password')}
                        color="link" className="forgot-password-link">
                        Did you forget password?
                      </span>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
        <OtpModal 
          show={otpModal} 
          onHide={() => setOtpModal(false)}
          // otpId={loginData?.data[0]?.otpId}
          handleSubmit={handleSubmitOtp}
          isError={otpIsError}
          isLoading={otpLoader}
          OTP={OTP}
          setOTP={setOTP}
          />
      </CContainer>
    </div>
  )
}

export default Login
