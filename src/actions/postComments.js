import {
  POST_COMMENTS_LOADING,
  POST_COMMENTS_SUCCESS,
  POST_COMMENTS_ERROR,
} from './actionTypes';

const postCommentsLoading = () => (
  {
    type: POST_COMMENTS_LOADING,
  }
);

const postCommentSuccess = (payload) => (
  {
    type: POST_COMMENTS_SUCCESS,
    payload,
  }
);

const postCommentError = (error) => (
  {
    type: POST_COMMENTS_ERROR,
    error,
  }
);

const postComments = (commentsPayload, slug) => async (dispatch, getState, { api }) => {
  try {
    dispatch(postCommentsLoading());
    const request = await api.post(`/articles/${slug}/comments`, commentsPayload);
    dispatch(postCommentSuccess(request.data));
  } catch (error) {
    dispatch(postCommentError(error));
  }
};

export default postComments;
