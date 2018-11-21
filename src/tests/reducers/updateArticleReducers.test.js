import updateArticleReducer from '../../reducers/updateArticleReducer';
import { updateArticleInitialState } from '../__mocks__/updateArticleMockData.json';
import { postArticle } from '../mock/articleData';

describe('update article reducer', () => {
  it('sets status key success to true upon UPDATE_ARTICLE_SUCCESS type', () => {
    const action = {
      type: 'UPDATE_ARTICLE_SUCCESS',
      payload: postArticle.data,
    };
    expect(updateArticleReducer(updateArticleInitialState, action)).toEqual({
      updatedArticle: postArticle.data,
      status: {
        success: true,
        error: false,
      },
    });
  });
  it('sets status key success to false upon UPDATE_ARTICLE_LOADING type', () => {
    const action = {
      type: 'UPDATE_ARTICLE_LOADING',
    };
    expect(updateArticleReducer(updateArticleInitialState, action)).toEqual({
      updatedArticle: {},
      status: {
        success: false,
        error: false,
      },
    });
  });
  it('sets status key error to true upon UPDATE_ARTICLE_ERROR type', () => {
    const action = {
      type: 'UPDATE_ARTICLE_ERROR',
    };
    expect(updateArticleReducer(updateArticleInitialState, action)).toEqual({
      updatedArticle: {},
      status: {
        success: false,
        error: true,
      },
    });
  });
});
