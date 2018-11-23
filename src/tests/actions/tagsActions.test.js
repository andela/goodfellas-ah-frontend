import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addTags } from '../../actions/articleActions';
import { addTagsDetail } from '../mock/articleData';
import * as types from '../../actions/actionTypes';
import API from '../mock/API';

const middlewares = [thunk.withExtraArgument(API)];
const mockStore = configureMockStore(middlewares);

const tags = ['home', 'tags'];
const message = 'Invalid request, Route does not exist';
const callback = () => {
  const age = 1;
  return age;
};

describe('Tags actions', () => {
  const tagsResponse = [
    {
      type: types.ADD_TAGS,
      payload: addTagsDetail.data,
    },
  ];
  const tagsErrorResponse = [
    {
      type: types.ADD_TAGS_ERROR,
      payload: {
        status: 404,
        data: {
          error: message,
          message,
        },
      },
    },
  ];
  it('successfully mock tag actions', () => {
    const store = mockStore();

    return store.dispatch(addTags(tags, 'somiso', callback)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(tagsResponse);
    });
  });

  it('successfully mock tags error action', () => {
    const store = mockStore();

    return store.dispatch(addTags(tags, 'fihlsl', callback)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(tagsErrorResponse);
    });
  });
});
