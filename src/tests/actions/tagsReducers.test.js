import articleReducer from '../../reducers/articleReducer';
import * as types from '../../actions/actionTypes';
import initialState from '../../reducers/initialState';

const tags = ['home', 'tags'];

describe('Tags reducer', () => {
  it('should return the initial state', () => {
    expect(articleReducer(undefined, {})).toEqual(initialState);
  });
  const tagsError = 'error';
  it('should handle SET_Notification', () => {
    expect(
      articleReducer([], {
        type: types.ADD_TAGS,
        payload: tags,
      }),
    ).toEqual({
      tags: [...tags],
    });
  });
  it('should handle tags error reducer', () => {
    expect(
      articleReducer([], {
        type: types.ADD_TAGS_ERROR,
        payload: tagsError,
      }),
    ).toEqual({
      tagsError,
    });
  });
});
