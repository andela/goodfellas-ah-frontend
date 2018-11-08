const initialState = {
  authenticated: '',
  errorMessage: '',
};

export const profile = {
  loading: true,
  profileView: 'Following',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTQxNDA3NzcxLCJleHAiOjE1NDE0OTQxNzF9.DHaysbXDOqw8iWXw_JKE8-9H-s2AXS_dqAz1NzO-rpg',
  profileError: '',
  userId: 1,
  user: {},
  profile: {},
  followers: [],
  following: [],
  articles: [],
  favorites: [],
};
export default initialState;
