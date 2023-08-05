
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
  createRole: builder.mutation({
    query: (body) => ({
      url: `${baseUrl}/create/permission`,
      method: 'post',
      body
    })
  }), 

  fetchRoles: builder.query({
    query: () => `${baseUrl}/`
  })

})

export default settingsEndPoints