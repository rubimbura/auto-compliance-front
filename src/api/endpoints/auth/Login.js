
const baseUrl = '/univ'


const authEndPoints = (builder) => 
({
  login: builder.mutation({
    query: (body) => ({
      url: `${baseUrl}/login`,
      method: 'post',
      body,
    })
  }),
  requestNonce: builder.query({
      query: () => `/univ/nonce` 
  }),
  verifyOtp:builder.mutation({
    query: (body) => ({
      url: `${baseUrl}/token`,
      method: `post`,
      body
    })
  })

})

export default authEndPoints