import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilChartPie,
  cilSpeedometer,
  cilPuzzle
} from '@coreui/icons'
import {  CNavItem, CNavTitle, CNavGroup } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: '',
  },
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },

  {
    component: CNavTitle,
    name: '',
  },
  {
    component: CNavItem,
    name: 'Regulations',
    to: '/regulations',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Users',
    to: '/users',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Settings',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Roles',
        to: '/roles',
      },
      {
        component: CNavItem,
        name: 'Permission',
        to: '/permissions',
      },
    ]
  },
]

export default _nav
