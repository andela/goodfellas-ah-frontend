import notificationReducer from '../../reducers/notificationReducer';
import * as types from '../../actions/actionTypes';
import initialState from '../../reducers/initialState';

describe('fnotification reducer', () => {
  it('should return the initial state', () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  const notificationSettings = ['email', 'inApp'];
  const notifications = {};
  it('should handle SET_Notification', () => {
    expect(
      notificationReducer([], {
        type: types.SET_NOTIFICATION,
        payload: notificationSettings,
      }),
    ).toEqual({
      notification: [...notificationSettings],
    });
  });
  it('should handle LATEST_Notification', () => {
    expect(
      notificationReducer([], {
        type: types.LATEST_NOTIFICATION,
        payload: notifications,
      }),
    ).toEqual({
      notifications: { ...notifications },
    });
  });
});
