
const baseUrl = '/univ'


const evaluationEndPoints = (builder) => 
({
  fetchEvaluations: builder.query({
    query: `${baseUrl}`
  })
})

export default evaluationEndPoints