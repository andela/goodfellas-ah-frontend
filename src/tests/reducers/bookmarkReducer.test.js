import articleReducer from '../../reducers/articleReducer';
import * as types from '../../actions/actionTypes';
import initialState from '../../reducers/initialState';

describe('article reducer', () => {
  it('should return the initial state', () => {
    expect(articleReducer(undefined, {})).toEqual(initialState);
  });

  const bookmarkedArticle = ['email', 'inApp'];
  const article = ['email', 'inApp'];
  const error = ['error', 'error'];
  it('should handle bookmarked articles', () => {
    expect(
      articleReducer([], {
        type: types.GET_BOOKMARKED_ARTICLES,
        payload: bookmarkedArticle,
      }),
    ).toEqual({
      bookmarkedArticles: [...bookmarkedArticle],
    });
  });
  it('should handle articles', () => {
    expect(
      articleReducer([], {
        type: types.GET_AN_ARTICLE,
        payload: article,
      }),
    ).toEqual({
      article: [...article],
    });
  });
  it('should handle articles errors', () => {
    expect(
      articleReducer([], {
        type: types.GET_AN_ARTICLE_ERROR,
        payload: error,
      }),
    ).toEqual({
      articleError: [...error],
    });
  });
  it('should handle articles loading', () => {
    expect(
      articleReducer([], {
        type: types.ARTICLE_LOADING,
        payload: article,
      }),
    ).toEqual({
      articleLoading: [...article],
    });
  });
});
