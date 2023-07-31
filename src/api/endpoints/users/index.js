const baseUrl = "/univ";

const usersEndpoints = (builder) => ({
  fetchUsers: builder.query({
    query: () => `${baseUrl}/users?p=1&r=50`,
    providesTags: ["users"],
  }),
  deleteUser: builder.mutation({
    query: () => ({
      url: ``,
      method: "delete",
    }),
    invalidatesTags: ["users"],
  }),
  createUser: builder.mutation({
    query: (body) => ({
      url: `${baseUrl}/create/user`,
      method: "post",
      body,
    }),
    invalidatesTags: ["users"],
  }),
});

export default usersEndpoints;
