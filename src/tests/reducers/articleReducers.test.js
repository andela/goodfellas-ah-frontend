import articleReducer from '../../reducers/articleReducer';
import * as types from '../../actions/actionTypes';

describe('Article Reducer', () => {
  describe('INITIAL_STATE', () => {
    test('is correct', () => {
      const action = {
        type: 'wrong_action',
        payload: '',
      };
      const initialState = {
        authenticated: '',
        errorMessage: '',
        user: {},
        articles: [],
        error: [],
      };
      expect(articleReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe('GET_ARTICLES', () => {
    test('returns the correct state', () => {
      const action = { type: types.GET_ARTICLES, payload: [{ articles: 'new Articles' }] };
      const expectedState = {
        authenticated: '',
        errorMessage: '',
        user: {},
        articles: [{ articles: 'new Articles' }],
        error: [],
      };
      expect(articleReducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe('GET_ARTICLES_ERROR', () => {
    test('returns the correct state', () => {
      const action = { type: types.GET_ARTICLES_ERROR, payload: 'Error getting articles' };
      const expectedState = {
        authenticated: '',
        errorMessage: '',
        user: {},
        articles: [],
        error: 'Error getting articles',
      };
      expect(articleReducer(undefined, action)).toEqual(expectedState);
    });
  });
});
