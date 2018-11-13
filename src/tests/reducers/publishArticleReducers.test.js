import publishArticleReducer from '../../reducers/publishArticleReducer';
import { createArticleInitialState } from '../__mocks__/articleMockData.json';
import publishArticleMockData from '../__mocks__/publishArticleMockData.json';

describe('publish article reducer', () => {
  it('sets status key success to true upon PUBLISH_ARTICLE_SUCCESS type', () => {
    const action = {
      type: 'PUBLISH_ARTICLE_SUCCESS',
      payload: publishArticleMockData,
    };
    expect(publishArticleReducer(createArticleInitialState, action)).toEqual({
      publishedArticle: publishArticleMockData,
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
