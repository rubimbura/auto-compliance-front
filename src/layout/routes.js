import React from 'react'


const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard'))
const Governance = React.lazy(()=>import('../views/governance'))
const AddGovernanceBodyForm = React.lazy(()=>import('../views/governance/AddGovernanceForm'))
const ViewRegulationForm = React.lazy(() => import('../views/governance/ViewRegulation'))
const ViewRegulationArticle = React.lazy(() => import('../views/governance/ViewRegulationArticle'))
const Users = React.lazy(() => import('../views/users'))
const RolesSettings = React.lazy(() => import('../views/settings/roles'))
const PermissionSettings = React.lazy(() => import('../views/settings/permisions'))
const Evaluation = React.lazy(() => import('../views/evaluation'))

// user regulations
const UserRegulation = React.lazy(() => import('../views/governance/user/UserRegulation'))
const AssesUserRegulation = React.lazy(() => import('../views/governance/user/UserAssessRegulation'))


// governance bodies 
const GovernanceBodies = React.lazy(() => import('../views/governanceBody'))

// Subsidiaries
const Subsidiaries = React.lazy(() => import('../views/subsidiaries'))

const routes = [
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/governances', name: 'Governances', element: Governance},
  { path: '/governances/new-governance-body', name: 'Add new regulation form', element: AddGovernanceBodyForm},
  { path: '/regulations/view-regulation', name: 'Regulation Form', element: ViewRegulationForm},
  { path: '/regulations/view-regulation/article', name: 'Article', element: ViewRegulationArticle},
  { path: '/user/regulations', name: 'Regulation', element: UserRegulation},
  { path: '/user/regulations/assesment', name: 'Regulation', element: AssesUserRegulation},
  { path: '/users', name: 'Users', element: Users},
  { path: '/Roles', name: 'Roles', element: RolesSettings},
  { path: '/Permissions', name: 'Permissions', element: PermissionSettings},
  { path: '/subsidiaries', name: 'Subsidiaries', element: Subsidiaries},
  { path: '/governance-bodies', name: 'Governance Bodies', element: GovernanceBodies},
  { path: '/evaluation', name: 'Evaluation', element: Evaluation},
]

export default routes
