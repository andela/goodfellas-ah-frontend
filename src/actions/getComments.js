import {
  GET_COMMENTS_LOADING,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_ERROR,
} from './actionTypes';

const getCommentsLoading = (status = true) => (
  {
    type: GET_COMMENTS_LOADING,
    payload: status,
  }
);

const getComments = (slug) => async (dispatch, getState, { api }) => {
  try {
    dispatch(getCommentsLoading());
    const response = await api.get(`/articles/${slug}/comments`);
    dispatch(getCommentsLoading(false));
    dispatch({
      type: GET_COMMENTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch(getCommentsLoading(false));
    dispatch({
      type: GET_COMMENTS_ERROR,
      payload: error,
    });
  }
};

export default getComments;
