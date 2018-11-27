import {
  GET_COMMENTS_LOADING,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_ERROR,
} from '../actions/actionTypes';

const initialState = {
  comments: {},
  status: {
    error: false,
    success: false,
  },
};

const getCommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS_LOADING:
      return {
        ...state,
        status: {
          error: false,
          success: false,
        },
      };


    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        status: {
          success: true,
          error: false,
        },
      };

    case GET_COMMENTS_ERROR:
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

export default getCommentsReducer;
