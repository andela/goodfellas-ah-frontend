import {
  PUBLISH_ARTICLE_LOADING,
  PUBLISH_ARTICLE_SUCCESS,
  ERROR_DISPATCH,
} from '../actions/actionTypes';

const initialState = {
  publishedArticle: {},
  status: {
    error: false,
    success: false,
  },
};

const publishArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUBLISH_ARTICLE_LOADING:
      console.log('loadinggggggggggggggggg');
      return {
        ...state,
        status: {
          error: false,
          success: false,
        },
      };

    case PUBLISH_ARTICLE_SUCCESS:
      console.log('successssssssssssssssss');
      return {
        ...state,
        publishedArticle: action.payload,
        status: {
          success: true,
          error: false,
        },
      };

    case ERROR_DISPATCH: {
      console.log('errorrrrrrrrrrrrrrrrr');
      return {
        ...state,
        status: {
          error: true,
          success: false,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default publishArticleReducer;
