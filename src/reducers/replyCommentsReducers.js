import {
  REPLY_COMMENTS_LOADING,
  REPLY_COMMENTS_SUCCESS,
  REPLY_COMMENTS_ERROR,
} from '../actions/actionTypes';

const initialState = {
  repliedComment: {},
  status: {
    error: false,
    success: false,
  },
};

const replyCommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REPLY_COMMENTS_LOADING:
      return {
        ...state,
        status: {
          error: false,
          success: false,
        },
      };


    case REPLY_COMMENTS_SUCCESS:
      return {
        ...state,
        repliedComment: action.payload,
        status: {
          success: true,
          error: false,
        },
      };

    case REPLY_COMMENTS_ERROR:
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

export default replyCommentsReducer;
