import { updateArticleDetail } from '../mock/articleData';
import updateArticle from '../../actions/updateArticle';
import { CustomAPIError } from '../mock/API';

describe('updateArticle actionCreator test-suite', () => {
  it(`dispatches UPDATE_ARTICLE_LOADING, UPDATE_ARTICLE_SUCCESS
  upon successful server response`, async () => {
    const expectedActions = [
      {
        type: 'UPDATE_ARTICLE_LOADING',
      },
      {
        type: 'UPDATE_ARTICLE_SUCCESS',
        payload: updateArticleDetail.data,
      },
    ];

    const store = mockStore({});
    await store.dispatch(updateArticle(updateArticleDetail.data.data, 'we-are-here'));
    expect(store.getActions()).toEqual(expectedActions);
  });
  it(`dispatches UPDATE_ARTICLE_LOADING, UPDATE_ARTICLE_ERROR
  upon successful server response`, async () => {
    const expectedActions = [
      {
        type: 'UPDATE_ARTICLE_LOADING',
      },
      {
        type: 'UPDATE_ARTICLE_ERROR',
        error: new CustomAPIError('All fields are required', 400),
      },
    ];

    const store = mockStore({});
    await store.dispatch(updateArticle({ title: 'A new Article' }, 'we-are-here'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
