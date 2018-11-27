import {
  REPLY_COMMENTS_LOADING,
  REPLY_COMMENTS_SUCCESS,
  REPLY_COMMENTS_ERROR,
} from './actionTypes';

const replyCommentsLoading = () => (
  {
    type: REPLY_COMMENTS_LOADING,
  }
);

const replyCommentsSuccess = (payload) => (
  {
    type: REPLY_COMMENTS_SUCCESS,
    payload,
  }
);

const replyCommentsError = (error) => (
  {
    type: REPLY_COMMENTS_ERROR,
    error,
  }
);

const replyComments = (replyCommentPayload, commentId) => async (dispatch, getState, { api }) => {
  try {
    dispatch(replyCommentsLoading());
    const request = await api.post(`/articles/comments/reply/${commentId}`, replyCommentPayload);
    dispatch(replyCommentsSuccess(request.data));
  } catch (error) {
    dispatch(replyCommentsError(error));
  }
};

export default replyComments;
