import { postArticle } from '../mock/articleData';
import publishArticle from '../../actions/publishArticle';
import { CustomAPIError } from '../mock/API';

describe('publishArticle actionCreator test-suite', () => {
  it(`dispatches PUBLISH_ARTICLE_LOADING, PUBLISH_ARTICLE_SUCCESS
  upon successful server response`, async () => {
    const expectedActions = [
      {
        type: 'PUBLISH_ARTICLE_LOADING',
      },
      {
        type: 'PUBLISH_ARTICLE_SUCCESS',
        payload: postArticle.data,
      },
    ];

    const store = mockStore({});
    await store.dispatch(publishArticle(postArticle.data.data));
    expect(store.getActions()).toEqual(expectedActions);
  });
  it(`dispatches PUBLISH_ARTICLE_LOADING, PUBLISH_ARTICLE_ERROR
  upon failed server response`, async () => {
    const expectedActions = [
      {
        type: 'PUBLISH_ARTICLE_LOADING',
      },
      {
        type: 'PUBLISH_ARTICLE_ERROR',
        error: new CustomAPIError('All fields are required', 400),
      },
    ];

    const store = mockStore({});
    await store.dispatch(publishArticle({ title: 'A new Article' }));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
