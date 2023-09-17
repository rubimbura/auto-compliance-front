
const baseUrl = '/univ/subsidiary'


const subsidiariesEndpoints = (builder) => 
({
  fetchsubsidiaries: builder.query({
      query: () => `${baseUrl}?p=0&r=50`,
      providesTags: ['subsidiary']
  }),
  addSubsidiary: builder.mutation({
    query: (body) => ({
      url: `${baseUrl}`,
      method: 'post',
      body
    }),
    invalidatesTags: ['subsidiary']
  })
})

export default subsidiariesEndpoints