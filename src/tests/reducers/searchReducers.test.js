import articleReducer from '../../reducers/articleReducer';
import * as types from '../../actions/actionTypes';
import initialState from '../../reducers/initialState';

const articles = {
  articles: {
    searchResults: {
      success: true,
      articles: [
        {
          favorited: null,
          favoritesCount: null,
          id: 2,
          slug: 'jake-peralta-is-an-idiot',
          title: 'Lorem ipsum, please teach me to right',
          description: 'Stressss',
          body: 'Do you know what the perimeter of the earth is? like the whole earth o, including the ocean? yh i don\'t know it either. ',
          image: 'https://res.cloudinary.com/drmmqcxkc/image/upload/v1541610101/v6secq0grmfsayjb22wt.jpg',
          tagList: null,
          read_time: '1 minute',
          averageRating: null,
          authorId: 1,
          createdAt: '2018-11-07T16:48:19.350Z',
          updatedAt: '2018-11-07T17:01:42.065Z',
          user: {
            firstname: 'Jeff',
            lastname: 'Britta',
            profile: {
              image: 'https://res.cloudinary.com/drmmqcxkc/image/upload/v1541609731/sa6kvtumxdmsdwyz9xcj.jpg',
            },
          },
          reactions: [
            {
              reaction: 1,
            },
            {
              reaction: 1,
            },
          ],
          comments: [],
        },
        {
          favorited: null,
          favoritesCount: null,
          id: 3,
          slug: 'horsin-around',
          title: 'Horsin\' around!',
          description: 'Stressss',
          body: 'Today, we have with us the star of the 90s show Horsin\' around. Bojack Horseman!. Hello Bojack. How is it going today? ',
          image: null,
          tagList: null,
          read_time: '1 minute',
          averageRating: null,
          authorId: 1,
          createdAt: '2018-11-07T16:48:43.392Z',
          updatedAt: '2018-11-07T16:48:43.392Z',
          user: {
            firstname: 'Jeff',
            lastname: 'Britta',
            profile: {
              image: 'https://res.cloudinary.com/drmmqcxkc/image/upload/v1541609731/sa6kvtumxdmsdwyz9xcj.jpg',
            },
          },
          reactions: [],
          comments: [],
        },
      ],
    },
    searchError: {
      data: {
        success: false,
        message: 'We couldn\'t find any articles.',
      },
      status: 404,
      statusText: 'Not Found',
      headers: {
        'content-type': 'application/json; charset=utf-8',
      },
      config: {
        transformRequest: {},
        transformResponse: {},
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        headers: {
          Accept: 'application/json, text/plain, */*',
        },
        method: 'get',
        url: 'http://localhost:5000/api/articles/search?article=home&author=false&tag=false',
      },
      request: {},
    },
  },
};

describe('search reducer', () => {
  it('should return the initial state', () => {
    expect(articleReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle SEARCH', () => {
    expect(
      articleReducer([], {
        type: types.SEARCH,
        payload: articles.articles.searchResults,
      }),
    ).toEqual({ searchResults: articles.articles.searchResults });
  });
  it('should handle SEARCH_ERROR', () => {
    expect(
      articleReducer([], {
        type: types.SEARCH_ERROR,
        payload: articles.articles.searchError,
      }),
    ).toEqual({ searchError: articles.articles.searchError });
  });
});
