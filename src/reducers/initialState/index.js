const initialState = {
  authenticated: '',
  userId: null,
  errorMessage: '',
  successMessage: '',
  user: {},
  ownProfile: {},
  articles: [],
  error: [],
  article: null,
  articleError: '',
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
