import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from '../../actions/articleActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const articles = {
  articles: {
    message: 'Articles gotten successfully!',
    articles: [
      {
        favorited: false,
        favoritesCount: 0,
        id: 7,
        slug: 'team-pacey',
        title: 'Team Pacey',
        description: 'Stressss',
        body:
          'Pacey and Dawson started out as friends. But here we are. Joey was on her own o. Well not on her own sha but l;et\'s end',
        image: 'image',
        tagList: null,
        read_time: '1 minute',
        averageRating: null,
        authorId: 2,
        createdAt: '2018-11-07T16:51:35.336Z',
        updatedAt: '2018-11-07T16:51:35.336Z',
        bookmarked: [],
        user: {
          firstname: 'Jake',
          lastname: 'Peralta',
          profile: {
            image: 'profileImage',
          },
        },
        reactions: [{
          reaction: 1,
        }],
        favorite: [],
        star_ratings: [],
      },
      {
        favorited: false,
        favoritesCount: 0,
        id: 4,
        slug: 'team-pacey-3',
        title: 'Team Pacey',
        description: 'Stressss',
        body:
          'Pacey and Dawson snd started out as friends. But here we are. Joey was on her own o. Well not on her own sha but l;et\'s end',
        image: null,
        tagList: null,
        read_time: '1 minute',
        averageRating: null,
        authorId: 1,
        createdAt: '2018-11-07T16:51:35.336Z',
        updatedAt: '2018-11-07T16:51:35.336Z',
        bookmarked: [],
        user: {
          firstname: 'Jake',
          lastname: 'Peralta',
          profile: {
            image: null,
          },
        },
        reactions: [],
        favorite: [],
        star_ratings: [],
      },
    ],
    pages: 2,
  },
};

const error = { error: 'Internal Server Error' };

// const error = [];
describe('search actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('successfully SEARCHES for articles', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: articles,
      });
    });

    const expectedActions = [
      {
        payload: articles,
        type: 'SEARCH',
      },
    ];

    const store = mockStore({ articles: {} });

    const searchValues = { Title: 'team', Author: false, Tag: false };
    const callback = () => {
      const age = 1;
      return age;
    };

    return store.dispatch(actions.search(searchValues, callback)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('fails to SEARCH for articles', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        response: error,
      });
    });

    const expectedActions = [
      {
        payload: { data: undefined, error: 'Internal Server Error' },
        type: 'SEARCH_ERROR',
      },
    ];

    const store = mockStore({ articles: {} });

    const searchValues = { Title: 'lorem', Author: false, Tag: false };

    return store.dispatch(actions.search(searchValues)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
