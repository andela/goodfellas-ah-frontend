import axios from 'axios';
import * as types from './actionTypes';

const apiUrl = process.env.REACT_APP_API_URL;

const articleLoading = (status = true) => ({
  type: types.ARTICLE_LOADING,
  payload: status,
});

export const getArticles = () => async (dispatch) => {
  try {
    const response = await axios.get(`${apiUrl}/api/articles/feed/1&24`);
    dispatch({
      type: types.GET_ARTICLES,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_ARTICLES_ERROR,
      payload: error.response,
    });
  }
};

export const search = (searchValues, callback) => async (dispatch) => {
  try {
    const { Title, Author, Tag } = searchValues;

    const response = await axios.get(`${apiUrl}/api/articles/search?article=${Title}&author=${Author}&tag=${Tag}`);
    dispatch({
      type: types.SEARCH,
      payload: response.data,
    });
    callback();
  } catch (error) {
    dispatch({
      type: types.SEARCH_ERROR,
      payload: error.response,
    });
  }
};

export const addTags = (newTags, slug, callback) => async (dispatch, getState, { api }) => {
  try {
    const response = await api.post(`/articles/${slug}/tags`, {
      tags: newTags,
    });
    dispatch({
      type: types.ADD_TAGS,
      payload: response.data,
    });
    callback();
  } catch (error) {
    dispatch({
      type: types.ADD_TAGS_ERROR,
      payload: error.response,
    });
  }
};

export const getAnArticle = (slug) => async (dispatch, getState, { api }) => {
  dispatch(articleLoading());
  try {
    const response = await api.get(`/articles/${slug}`);
    dispatch(articleLoading(false));
    dispatch({
      type: types.GET_AN_ARTICLE,
      payload: response.data.article,
    });
  } catch (error) {
    dispatch(articleLoading(false));
    dispatch({
      type: types.GET_AN_ARTICLE_ERROR,
      payload: error.response.data.message || error.response.data.error,
    });
  }
};

export const react = (slug, reaction = 1) => async (dispatch, getState, { api }) => {
  const article = Object.assign(getState().articles.article);
  const iPreviouslyReacted = article.myReactions[0] && article.myReactions[0].reaction;
  let addLike = 0;
  let addDislike = 0;
  if (iPreviouslyReacted === 1) {
    addLike = -1;
    if (reaction === -1) addDislike = 1;
  }
  if (iPreviouslyReacted === -1) {
    addDislike = -1;
    if (reaction === 1) addLike = 1;
  }
  if (!iPreviouslyReacted) {
    if (reaction === 1) addLike = 1;
    if (reaction === -1) addDislike = 1;
  }
  const myReactions = iPreviouslyReacted === reaction ? [] : [{ reaction }];
  const reactionCount = {
    likes: article.reactionCount.likes + addLike,
    dislikes: article.reactionCount.dislikes + addDislike,
  };
  dispatch({
    type: types.UPDATE_REACTION,
    payload: {
      myReactions,
      reactionCount,
    },
  });
  try {
    await api.post(`/articles/${slug}/react`, { reaction });
  } catch (error) {
    dispatch({
      type: types.UPDATE_REACTION,
      payload: {
        myReactions: article.myReactions,
        reactionCount: article.reactionCount,
      },
    });
  }
};

export default getArticles;
