
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
  }),
  fetchRegulationArticles: builder.query({
    query: (id) => `${baseUrl}/articles?p=0&r=50&sv=${id}`
  }),
  addRegulationArticle: builder.mutation({
    query:(body) => ({
      url: `${baseUrl}/create/article`,
      method: 'post',
      body
    })
  }), 
  fetchUsersByArticleId: builder.query({
    query: (id) => `${baseUrl}/users/articles/${id}?p=0&r=50`,
    providesTags: 'assignedUsers'
  }),

  searchUsers: builder.query({
    query: (searchQuery) => `${baseUrl}/users?p=0&r=50&sv=${searchQuery}`
  })

})

export default regulationEndPoints