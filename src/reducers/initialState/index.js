const initialState = {
  authenticated: '',
  errorMessage: '',
  successMessage: '',
  user: {},
  ownProfile: {},
  articles: [],
  articleLoading: false,
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
};

export default initialState;
