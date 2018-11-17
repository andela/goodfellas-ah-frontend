const initialState = {
  authenticated: '',
  userId: null,
  errorMessage: '',
  successMessage: '',
  user: {},
  ownProfile: {},
  articles: [],
  error: [],
  searchResults: [],
  searchError: [],
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
  notification: [],
  notifications: {},
};

export default initialState;
