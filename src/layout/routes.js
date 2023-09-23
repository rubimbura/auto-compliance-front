import React from 'react'


const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard'))
const Regulations = React.lazy(()=>import('../views/regulations'))
const AddRegulationForm = React.lazy(()=>import('../views/regulations/AddRegulationForm'))
const ViewRegulationForm = React.lazy(() => import('../views/regulations/ViewRegulation'))
const ViewRegulationArticle = React.lazy(() => import('../views/regulations/ViewRegulationArticle'))
const Users = React.lazy(() => import('../views/users'))
const RolesSettings = React.lazy(() => import('../views/settings/roles'))
const PermissionSettings = React.lazy(() => import('../views/settings/permisions'))

// user regulations
const UserRegulation = React.lazy(() => import('../views/regulations/user/UserRegulation'))
const AssesUserRegulation = React.lazy(() => import('../views/regulations/user/UserAssessRegulation'))


// governance bodies 
const GovernanceBodies = React.lazy(() => import('../views/governanceBody'))

// Subsidiaries
const Subsidiaries = React.lazy(() => import('../views/subsidiaries'))

const routes = [
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/regulations', name: 'Regulations', element: Regulations},
  { path: '/regulations/new-regulation', name: 'Add new regulation form', element: AddRegulationForm},
  { path: '/regulations/view-regulation', name: 'Regulation Form', element: ViewRegulationForm},
  { path: '/regulations/view-regulation/article', name: 'Article', element: ViewRegulationArticle},
  { path: '/user/regulations', name: 'Regulation', element: UserRegulation},
  { path: '/user/regulations/assesment', name: 'Regulation', element: AssesUserRegulation},
  { path: '/users', name: 'Users', element: Users},
  { path: '/Roles', name: 'Roles', element: RolesSettings},
  { path: '/Permissions', name: 'Permissions', element: PermissionSettings},
  { path: '/subsidiaries', name: 'Subsidiaries', element: Subsidiaries},
  { path: '/governance-bodies', name: 'Governance Bodies', element: GovernanceBodies},

]

export default routes
