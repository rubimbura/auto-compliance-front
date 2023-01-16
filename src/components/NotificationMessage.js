

import React, {useEffect} from 'react'
import {
  CAlert,
} from '@coreui/react'

const NotificationMessage = ({message, type}) => {


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])


  return (
    <CAlert color={type} style={{textAlign: 'center', height: '10px', display: 'flex',alignItems: 'center', justifyContent: 'center'}}>{message} </CAlert>
  )
}

export default NotificationMessage