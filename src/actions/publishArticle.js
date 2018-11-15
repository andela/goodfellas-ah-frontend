import axiosInstance from '../config/axiosConfig';

import {
  PUBLISH_ARTICLE_LOADING,
  PUBLISH_ARTICLE_SUCCESS,
  PUBLISH_ARTICLE_ERROR,
} from './actionTypes';

const publishArticleLoading = () => (
  {
    type: PUBLISH_ARTICLE_LOADING,
  }
);

const publishArticleError = (error) => (
  {
    type: PUBLISH_ARTICLE_ERROR,
    error,
  }
);

const publishArticleSuccess = (payload) => (
  {
    type: PUBLISH_ARTICLE_SUCCESS,
    payload,
  }
);

const publishArticle = (articlePayload) => async (dispatch) => {
  try {
    dispatch(publishArticleLoading());
    const request = await axiosInstance.post('/articles', articlePayload);
    dispatch(publishArticleSuccess(request.data));
  } catch (error) {
    dispatch(publishArticleError(error));
  }
};

export default publishArticle;
