import {
  POST_COMMENTS_LOADING,
  POST_COMMENTS_SUCCESS,
  POST_COMMENTS_ERROR,
} from '../actions/actionTypes';

const initialState = {
  postedComment: {},
  status: {
    error: false,
    success: false,
  },
};

const postCommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_COMMENTS_LOADING:
      return {
        ...state,
        status: {
          error: false,
          success: false,
        },
      };


    case POST_COMMENTS_SUCCESS:
      return {
        ...state,
        postedComment: action.payload,
        status: {
          success: true,
          error: false,
        },
      };

    case POST_COMMENTS_ERROR:
      return {
        ...state,
        status: {
          error: true,
          success: false,
        },
      };

    default: {
      return state;
    }
  }
};

export default postCommentsReducer;
