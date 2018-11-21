import {
  UPDATE_ARTICLE_LOADING,
  UPDATE_ARTICLE_SUCCESS,
  UPDATE_ARTICLE_ERROR,
} from '../actions/actionTypes';

const initialState = {
  updatedArticle: {},
  status: {
    error: false,
    success: false,
  },
};

const updateArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ARTICLE_LOADING:
      return {
        ...state,
        status: {
          error: false,
          success: false,
        },
      };

    case UPDATE_ARTICLE_SUCCESS:
      return {
        ...state,
        updatedArticle: action.payload,
        status: {
          success: true,
          error: false,
        },
      };

    case UPDATE_ARTICLE_ERROR: {
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

export default updateArticleReducer;
