import axios from 'axios';

import {
  IMAGE_UPLOAD_LOADING,
  IMAGE_UPLOAD_SUCCESS,
  IMAGE_UPLOAD_ERROR,
} from './actionTypes';

const CLOUD_NAME = 'drmmqcxkc';
const CLOUD_APIKEY = '657175248381499';

const imageUploadLoading = () => (
  {
    type: IMAGE_UPLOAD_LOADING,
  }
);

const imageUploadError = (error) => (
  {
    type: IMAGE_UPLOAD_ERROR,
    error,
  }
);

const imageUploadSuccess = (payload) => (
  {
    type: IMAGE_UPLOAD_SUCCESS,
    payload,
  }
);

const imageUpload = (imageFile) => async (dispatch) => {
  try {
    dispatch(imageUploadLoading());
    const formData = new FormData();
    formData.append('file', imageFile[0]);
    formData.append('upload_preset', 'hdwp6l5a');
    formData.append('api_key', CLOUD_APIKEY);
    formData.append('timestamp', (Date.now() / 1000));
    const request = await axios.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, formData);
    dispatch(imageUploadSuccess(request.data.url));
    return request.data.url;
  } catch (error) {
    dispatch(imageUploadError(error));
  }
};

export default imageUpload;
