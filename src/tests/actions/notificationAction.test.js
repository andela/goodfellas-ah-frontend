import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as types from '../../actions/actionTypes';
import initialState from '../../reducers/initialState';
import * as notificationActions from '../../actions/notificationActions';
import API from '../mock/API';

const middlewares = [thunk.withExtraArgument(API)];
const mockStore = configureMockStore(middlewares);

describe('Notifications', () => {
  const actionSuccess = [
    { type: types.SET_NOTIFICATION, payload: ['email', 'inApp'] },
  ];
  const actionSuccess2 = [
    {
      type: types.LATEST_NOTIFICATION,
      payload: {
        count: 15,
        rows: {
          0: {}, 1: {},
        },
      },
    },
  ];

  it('gets initial notifications', () => {
    const store = mockStore({ profile: initialState.profile });

    return store.dispatch(notificationActions.setNotification(1)).then(() => {
      expect(store.getActions()).toEqual(actionSuccess);
    });
  });
  it('gets latest notifications', () => {
    const store = mockStore({ profile: initialState.profile });

    return store.dispatch(notificationActions.getNotification()).then(() => {
      expect(store.getActions()).toEqual(actionSuccess2);
    });
  });
  it('update notification settings', () => {
    const store = mockStore({ profile: initialState.profile });

    return store.dispatch(notificationActions.updateNotification()).then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });
  it('update notification settings', () => {
    const store = mockStore({ profile: initialState.profile });

    return store.dispatch(notificationActions.seenNotification()).then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });
});
