import publishArticleMockData from '../__mocks__/publishArticleMockData.json';
import publishArticle from '../../actions/publishArticle';
import axiosConfig from '../../config/axiosConfig';

describe('publishArticle actionCreator test-suite', () => {
  beforeEach(() => moxios.install(axiosConfig));
  afterEach(() => moxios.uninstall());
  it(`dispatches PUBLISH_ARTICLE_LOADING, PUBLISH_ARTICLE_SUCCESS
  upon successful server response`, async () => {
    moxios.stubRequest('http://127.0.0.1:5000/api/articles', {
      status: 201,
      responseText: publishArticleMockData,
    });

    const expectedActions = [
      {
        type: 'PUBLISH_ARTICLE_LOADING',
      },
      {
        type: 'PUBLISH_ARTICLE_SUCCESS',
        payload: publishArticleMockData,
      },
    ];

    const store = mockStore({});
    await store.dispatch(publishArticle(publishArticleMockData.data));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
