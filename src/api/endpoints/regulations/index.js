
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

  searchUsers: builder.mutation({
    query: (searchQuery) => `${baseUrl}/users?p=0&r=50&sv=${searchQuery}`
  }),
  fetchUsersPerArticle: builder.query({
    query:(id) => `${baseUrl}/users/articles/${id}?p=0&r=50`,
    providesTags: ['usersPerArticle']
  }),
  createUserPerArticle: builder.mutation({
    query: (body) => ({
      url: `${baseUrl}/article/add-user`,
      method: 'post',
      body
    }),
    invalidatesTags: ['usersPerArticle']
  }),

  deleteUserPerArticle: builder.mutation({
    query: (body) => ({
      url: `${baseUrl}/article/remove-user`,
      method: 'post',
      body
    }),
    invalidatesTags: ['usersPerArticle']
  })

})

export default regulationEndPoints