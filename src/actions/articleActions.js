import axios from 'axios';
import * as types from './actionTypes';


export const getArticles = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/articles/feed/1Oka');
    dispatch({
      type: types.GET_ARTICLES,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_ARTICLES_ERROR,
      payload: error,
    });
  }
};

export default getArticles;
