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
    const response = await api.post(`${apiUrl}/api/articles/${slug}/tags`, {
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

export const getAnArticle = (slug) => async (dispatch) => {
  dispatch(articleLoading());
  try {
    const response = await axios.get(`${apiUrl}/api/articles/${slug}`);
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
