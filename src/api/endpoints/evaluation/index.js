
const baseUrl = '/evaluation'


const evaluationEndPoints = (builder) => 
({
  fetchEvaluations: builder.query({
    query: () => `${baseUrl}/filter?page=0&size=10`
  })
})

export default evaluationEndPoints