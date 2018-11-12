import {
  IMAGE_UPLOAD_LOADING,
  IMAGE_UPLOAD_SUCCESS,
  IMAGE_UPLOAD_ERROR,
} from '../actions/actionTypes';


const initialState = {
  uploadedImage: {},
  status: {
    error: false,
    success: false,
    loading: false,
  },
};

const imageUploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_UPLOAD_LOADING:
      return {
        ...state,
        status: {
          loading: true,
        },
      };

    case IMAGE_UPLOAD_SUCCESS:
      return {
        ...state,
        uploadedImage: action.payload,
        status: {
          success: true,
          error: false,
          loading: false,
        },
      };

    case IMAGE_UPLOAD_ERROR: {
      return {
        ...state,
        status: {
          error: true,
          success: false,
          loading: false,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default imageUploadReducer;
