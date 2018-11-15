import { postArticle } from '../mock/articleData';
import publishArticle from '../../actions/publishArticle';

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
    await store.dispatch(publishArticle(postArticle.data));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
