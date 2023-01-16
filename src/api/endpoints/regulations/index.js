
const baseUrl = '/univ'


const regulationEndPoints = (builder) => 
({
  fetchRegulations: builder.query({
      query: () => `${baseUrl}/regulations?p=1&r=50` 
  }),
  addRegulation: builder.mutation({
    query: (body) => ({
      url: `${baseUrl}/create/regulation`,
      method: 'post',
      body
    })
  }),
  updateRegulation: builder.mutation({
    query: (body) => ({
      url: `${baseUrl}/amend/regulation`,
      method: 'put',
      body
    })
  })

})

export default regulationEndPoints