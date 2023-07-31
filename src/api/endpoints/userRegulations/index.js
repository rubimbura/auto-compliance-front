
const baseUrl = '/univ'


const userRegulationEndPoints = (builder) => 
({
  fetchUserRegulations: builder.query({
      query: () => `${baseUrl}/regulations?p=1&r=50` 
  }),

 selfEvaluation: builder.mutation({
    query: (body) => ({
      url: ``,
      method: 'post',
      body
    })
 })

})

export default userRegulationEndPoints