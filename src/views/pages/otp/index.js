import React, { useRef, useState } from 'react'
import {  Modal } from 'react-bootstrap'
import classNames from 'classnames'
import './index.scss'
import OTPInput from "react-otp-input"
import {
  CButton,
} from '@coreui/react'
import useInterval from '../../../hooks/useInterval'




const OtpModal = ({
  show,
  onHide,
  isError,
  handleSubmit,
  isLoading,
  setOTP,
  OTP
}) => {

  const [countDownTimer, setCountDownTimer] = useState(300);
  const [timer, setTimer] = useState('5 min and 00 sec')


  function handleChange(OTP) {
    setOTP(OTP);
  }

  useInterval(() => {
    if (show) 
      setCountDownTimer(countDownTimer === 0
        ? 0
        : countDownTimer - 1);
    let min = Math.floor(countDownTimer / 60);
    let secs = countDownTimer - min * 60;
    setTimer(`${min} : ${secs < 10
      ? '0' + secs
      : secs}`);
  }, 1000);

  if ( countDownTimer === 0 && show ) {
    onHide()
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      dialogClassName="otp-modal"
      className="general-otp-modal"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Body
        className="otp-modal-body">
        <form action="" onSubmit={handleSubmit}>
         
          <span className="otp-title">Verification code</span>
          <span className="span">
            Enter the code that was sent to your phone number
          </span>
          <div className="otp-fake-field d-flex justify-content-between">
            <OTPInput
              onChange={handleChange}
              value={OTP}
              inputStyle="otp-inputStyle"
              numInputs={6}
              separator={<span></span>}
              style={{width: '100%'}}
              hasErrored
            />
          </div>
          {isError ? <p className={classNames(' text-center text-danger', {'d-block':  true})}> Invalid otp provided</p> : <p></p>}
          <div className="timer-container code-expire-ctn">
              <span
                className="otp-text-with-link"
                style={{
                  fontSize: '16px',
                  color: '#838AA2',
                  fontFamily: 'sofia-medium',
                }}
              >
                Code will expire in
                <span
                  style={
                    false
                      ? { color: '#D04750' }
                      : { color: '#1F65B3' }
                  }
                >
                  {' ' + timer} Minutes
                </span>
              </span>
          </div>
           <CButton 
              disabled={isLoading || OTP.length < 6}
              type="submit"
              style={{width: '100%', backgroundColor: '#015EC6', outline: 'none', padding: '15px 0px'}}>
              Submit
            </CButton>
        </form>
      </Modal.Body>
    </Modal>
  )
}

export default OtpModal
