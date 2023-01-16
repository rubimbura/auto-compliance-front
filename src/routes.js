import React from 'react'


const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Regulations = React.lazy(()=>import('./views/regulations'))
const AddRegulationForm = React.lazy(()=>import('./views/regulations/AddRegulationForm'))
const ViewRegulationForm = React.lazy(() => import('./views/regulations/ViewRegulation'))
const ViewRegulationArticle = React.lazy(() => import('./views/regulations/ViewRegulationArticle'))




const routes = [
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/regulations', name: 'Regulations', element: Regulations},
  { path: '/regulations/new-regulation', name: 'Add new regulation form', element: AddRegulationForm},
  { path: '/regulations/view-regulation', name: 'Regulation Form', element: ViewRegulationForm},
  { path: '/regulations/view-regulation/article', name: 'Article', element: ViewRegulationArticle},

]

export default routes
