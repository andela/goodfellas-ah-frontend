const initialState = {
  authenticated: '',
  userId: null,
  errorMessage: '',
  successMessage: '',
  user: {},
  ownProfile: {},
  articles: [],
  error: [],
  singleArticle: null,
  articleError: '',
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
