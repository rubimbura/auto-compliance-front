
const baseUrl = '/univ/governancebody'


const governaceBodyEndpoints = (builder) => 
({
  fetchGovernanceBody: builder.query({
      query: () => `${baseUrl}?p=0&r=50`,
      providesTags: ['governanceBody']
  }),

  addGovernanceBody: builder.mutation({
    query: (body) => ({
      url: `${baseUrl}`,
      method: 'post',
      body
    }),
    invalidatesTags: ['governanceBody']
  }),
  updateGovernanceBody: builder.mutation({
    query: (body) => ({
      url: `${baseUrl}`,
      method: 'put',
      body
    }),
    invalidatesTags: ['governanceBody']
  })
})

export default governaceBodyEndpoints