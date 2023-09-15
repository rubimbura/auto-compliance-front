
const baseUrl = '/univ'


const regulationEndPoints = (builder) => 
({
  fetchRegulations: builder.query({
      query: () => `${baseUrl}/governances?p=0&r=50` 
  }),
  addRegulation: builder.mutation({
    query: (body) => ({
      url: `${baseUrl}/create/governance`,
      method: 'post',
      body
    })
  }),
  updateRegulation: builder.mutation({
    query: (body) => ({
      url: `${baseUrl}/amend/governance`,
      method: 'put',
      body
    })
  }),
  fetchRegulationArticles: builder.query({
    query: (id) => `${baseUrl}/obligations?p=0&r=50&sv=${id}`,
    providesTags:['regulationArticle']
  }),
  addRegulationArticle: builder.mutation({
    query:(body) => ({
      url: `${baseUrl}/obligation`,
      method: 'post',
      body
    }),
    invalidatesTags: ['regulationArticle']
  }), 
  fetchUsersByArticleId: builder.query({
    query: (id) => `${baseUrl}/users/obligation/${id}?p=0&r=50`,
    providesTags: 'assignedUsers'
  }),

  searchUsers: builder.mutation({
    query: (searchQuery) => `${baseUrl}/users?p=0&r=50&sv=${searchQuery}`
  }),
  fetchUsersPerArticle: builder.query({
    query:(id) => `${baseUrl}/users/obligation/${id}?p=0&r=50`,
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