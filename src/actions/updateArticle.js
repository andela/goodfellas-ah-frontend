import axiosInstance from '../config/axiosConfig';

import {
  UPDATE_ARTICLE_LOADING,
  UPDATE_ARTICLE_SUCCESS,
  UPDATE_ARTICLE_ERROR,
} from './actionTypes';

const updateArticleLoading = () => (
  {
    type: UPDATE_ARTICLE_LOADING,
  }
);

const updateArticleError = (error) => (
  {
    type: UPDATE_ARTICLE_ERROR,
    error,
  }
);

const updateArticleSuccess = (payload) => (
  {
    type: UPDATE_ARTICLE_SUCCESS,
    payload,
  }
);
const updateArticle = (articlePayload) => async (dispatch) => {
  try {
    dispatch(updateArticleLoading());
    const request = await axiosInstance.put('/articles/lesspgreateryo-yolesspgreater', articlePayload);
    dispatch(updateArticleSuccess(request.data));
  } catch (error) {
    dispatch(updateArticleError(error));
  }
};

export default updateArticle;
