import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


import authEndPoints from './endpoints/auth/Login'
import regulationEndPoints from './endpoints/governances'
import usersEndpoints from './endpoints/users'
import userRegulationEndPoints from './endpoints/userRegulations'
import settingsEndPoints from './endpoints/settings'
import governaceBodyEndpoints from './endpoints/governanceBodies'
import subsidiariesEndpoints from './endpoints/subsidiaries'
import evaluationEndPoints from './endpoints/evaluation'


const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_D_CORE_URL,
  prepareHeaders: (headers) => {
    const token = sessionStorage.getItem('token')
    if(token){
      headers.set('Authorization', `Bearer ${token}`)
    }
    headers.set('Content-Type', 'application/json')
    headers.set('accept', 'application/json')
    headers.set('traceId', `acnsdsdcsdccsdcsdcsd`)
    return headers
  },
})

const baseQueryIntercep = async (args, api, extraOptions) => {
  let queryResult = await baseQuery(args, api, extraOptions)
  if(queryResult.error && queryResult.error?.status === 401 && api.endpoint !== 'getMe') {
    /* 
      TODO: Logout the user through the logout reducer, this should trigger a rerender
      at the App component level, and render the /login page.
    */
  }

  return queryResult
}

const appApi = createApi({
  reducerPath: 'data',
  baseQuery: baseQueryIntercep,
  tagTypes: [
    'auth',
    'usersPerArticle',
    'users',
    'permissions',
    'regulationArticle',
    'subsidiary',
    'roles'
  ],
  endpoints: (builder) => ({
    ...authEndPoints(builder),
    ...regulationEndPoints(builder),
    ...usersEndpoints(builder),
    ...userRegulationEndPoints(builder),
    ...settingsEndPoints(builder),
    ...governaceBodyEndpoints(builder),
    ...subsidiariesEndpoints(builder),
    ...evaluationEndPoints(builder)
  }),
})

export default appApi

export const {

  //auth Endpoints
useRequestNonceQuery,
useLoginMutation,
useVerifyOtpMutation,


//regulations
useLazyFetchGovernancesQuery,
useAddRegulationMutation,
useUpdateRegulationMutation,
useFetchRegulationArticlesQuery,
useAddRegulationArticleMutation,
useFetchUsersByArticleIdQuery,
useSearchUsersMutation,
useFetchUsersPerArticleQuery,
useCreateUserPerArticleMutation,
useDeleteUserPerArticleMutation,
useFetchTypesQuery,


//user regulations
useSelfEvaluationMutation,


//users
useFetchUsersQuery,
useCreateUserMutation,


//settings
useCreatePermissionMutation,
useCreateRoleMutation,
useFetchPermissionsQuery,
useFetchMenuQuery,
useFetchRolesQuery,
useUpdateRolesMutation,
useFetchPermisionsByRoleIdQuery,

//governance body
useFetchGovernanceBodyQuery,
useAddGovernanceBodyMutation,
useUpdateGovernanceBodyMutation,


//subsidiary 
useFetchsubsidiariesQuery,
useAddSubsidiaryMutation,


//evaluation
useFetchEvaluationsQuery,


} = appApi
