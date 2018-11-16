import * as types from './actionTypes';


export const setNotification = () => async (dispatch, getState, { api }) => {
  try {
    const { userId } = localStorage;
    const profile = await api.get(`/user/profile/${userId}`);
    const { notificationSettings } = profile.data.data.user;
    dispatch({
      type: types.SET_NOTIFICATION,
      payload: notificationSettings,
    });
  } catch (error) {
  }
};
export const updateNotification = (type, toggle) => async (dispatch, getState, { api }) => {
  try {
    await api.put(`/user/notification/${toggle}/${type}`);
  } catch (error) {
  }
};

export const getNotification = () => async (dispatch, getState, { api }) => {
  try {
    const notification = await api.get('/user/notification/');
    // console.log(notification.data.data);
    dispatch({
      type: types.LATEST_NOTIFICATION,
      payload: notification.data.data,
    });
  } catch (error) {
  }
};
export const seenNotification = (id) => async (dispatch, getState, { api }) => {
  try {
    const response = await api.put(`/user/notification/seen/${id}`);
    console.log(response);
  } catch (error) {
  }
};
