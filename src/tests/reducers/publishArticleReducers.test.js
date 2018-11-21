import publishArticleReducer from '../../reducers/publishArticleReducer';
import { createArticleInitialState } from '../__mocks__/articleMockData.json';
import { postArticle } from '../mock/articleData';

describe('publish article reducer', () => {
  it('sets status key success to true upon PUBLISH_ARTICLE_SUCCESS type', () => {
    const action = {
      type: 'PUBLISH_ARTICLE_SUCCESS',
      payload: postArticle.data,
    };
    expect(publishArticleReducer(createArticleInitialState, action)).toEqual({
      publishedArticle: postArticle.data,
      status: {
        success: true,
        error: false,
      },
    });
  });
  it('sets status key success to false upon PUBLISH_ARTICLE_LOADING type', () => {
    const action = {
      type: 'PUBLISH_ARTICLE_LOADING',
    };
    expect(publishArticleReducer(createArticleInitialState, action)).toEqual({
      publishedArticle: {},
      status: {
        success: false,
        error: false,
      },
    });
  });
  it('sets status key error to true upon PUBLISH_ARTICLE_ERROR type', () => {
    const action = {
      type: 'PUBLISH_ARTICLE_ERROR',
    };
    expect(publishArticleReducer(createArticleInitialState, action)).toEqual({
      publishedArticle: {},
      status: {
        success: false,
        error: true,
      },
    });
  });
});
