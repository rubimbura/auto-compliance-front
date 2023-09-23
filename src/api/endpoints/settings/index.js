
const baseUrl = '/univ'


const settingsEndPoints = (builder) => 
({
  fetchPermissions: builder.query({
    query: () => `${baseUrl}/permissions?p=0&r=50`,
    providesTags:['permissions']
  }),
  createPermission: builder.mutation({
    query: (body) => ({
      url: `${baseUrl}/create/permission`,
      method: 'post',
      body
    }),
    invalidatesTags:['permissions']
  }),
  fetchMenu: builder.query({
    query: () => `${baseUrl}/menu/list`
  }),
  fetchRoles : builder.query({
    query: () => `${baseUrl}/roles?p=0&r=50`,
    providesTags: ['roles']
  }),
  updateRoles: builder.mutation({
    query: (body) => ({
      url: `${baseUrl}/amend/role`,
      method: 'PUT',
      body
    }),
    invalidatesTags: ['roles']
  }),
  fetchPermisionsByRoleId: builder.query({
    query: (id) => `${baseUrl}/permissions/${id}?p=0&r=50`
  }),
  createRole: builder.mutation({
    query: (body) => ({
      url: `${baseUrl}/create/role`,
      method: 'post',
      body
    }),
    invalidatesTags: ['roles']
  }), 

})

export default settingsEndPoints