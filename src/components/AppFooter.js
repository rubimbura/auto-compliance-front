import React from 'react'
import { CFooter } from '@coreui/react'
import moment from 'moment/moment'

const AppFooter = () => {

  const date = new Date().getFullYear()

  return (
    <CFooter>
      <div>
        <span className="ms-1">&copy; {date}</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by Inc ltd</span>

      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
