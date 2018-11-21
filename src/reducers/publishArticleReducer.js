import {
  PUBLISH_ARTICLE_LOADING,
  PUBLISH_ARTICLE_SUCCESS,
  PUBLISH_ARTICLE_ERROR,
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
      return {
        ...state,
        status: {
          error: false,
          success: false,
        },
      };

    case PUBLISH_ARTICLE_SUCCESS:
      return {
        ...state,
        publishedArticle: action.payload,
        status: {
          success: true,
          error: false,
        },
      };

    case PUBLISH_ARTICLE_ERROR: {
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
