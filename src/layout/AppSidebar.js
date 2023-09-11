import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import jwtDecode from 'jwt-decode'
import { CSidebar,CSidebarNav, CSidebarToggler } from '@coreui/react'
import { AppSidebarNav } from '../components/AppSidebarNav'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import {  CNavItem, CNavTitle, CNavGroup } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilChartPie,
  cilSpeedometer,
  cilPuzzle
} from '@coreui/icons'


// sidebar nav config
import navigation from './_nav'
import userNaviagtion from './_userNav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const token = sessionStorage.getItem('token') 
  const decode = token ?  jwtDecode(token) : ''


  const userMenu = JSON.parse(sessionStorage.getItem('userMenu')) || []

  const formatUserMenu = userMenu?.map(el => {
    if(el.children.length <= 0 ){
      return {
        component: CNavItem,
        name: el.label,
        to:el.url,
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon"/>
      }
    }else{
      return{
        component: CNavGroup,
        name: el.label,
        to:'/base',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon"/>,
        items: el.children.map(val => ({
          component: CNavItem,
          name: val.label,
          to: val.url,
        }))
      }
    }
  })

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarNav>
        <br/>
        <br/>
        <SimpleBar>
          <AppSidebarNav items={formatUserMenu} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
