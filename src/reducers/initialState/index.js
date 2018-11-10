const initialState = {
  authenticated: '',
  userId: null,
  errorMessage: '',
  user: {},
  articles: [],
  error: [],
  profile: {
    loading: true,
    profileView: 'Following',
    profileError: '',
    user: {},
    profile: {},
    followers: [],
    following: [],
    articles: [],
    favorites: [],
  },
};

export default initialState;
