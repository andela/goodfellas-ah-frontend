import authReducer from '../../reducers/authReducer';
import imageUploadReducer from '../../reducers/imageUploadReducer';
import * as types from '../../actions/actionTypes';
import initialState from '../../reducers/initialState';
import * as profileData from '../mock/profileData';

describe('authReducer reducer', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle SIGNIN_USER', () => {
    expect(
      authReducer([], {
        type: types.SIGNIN_USER,
        payload: 'randomtoken',
      }),
    ).toEqual({ authenticated: 'randomtoken', errorMessage: '' });
  });
  it('should handle SIGNOUT_USER', () => {
    expect(
      authReducer([], {
        type: types.SIGNOUT_USER,
      }),
    ).toEqual({ authenticated: '', ownProfile: {}, user: {} });
  });
  it('should handle SET_OWN_PROFILE', () => {
    expect(
      authReducer([], {
        type: types.SET_OWN_PROFILE,
        payload: profileData.profile,
      }),
    ).toEqual({ ownProfile: profileData.profile });
  });
  it('should handle SET_USER', () => {
    expect(
      authReducer([], {
        type: types.SET_USER,
        payload: profileData.profile,
      }),
    ).toEqual({ user: profileData.profile });
  });
  it('should handle SIGNIN_USER_ERROR', () => {
    expect(
      authReducer([], {
        type: types.SIGNIN_USER_ERROR,
        payload: 'an error occoured',
      }),
    ).toEqual({ errorMessage: 'an error occoured' });
  });
  it('should handle SUCCESS_MSG', () => {
    expect(
      authReducer([], {
        type: types.SUCCESS_MSG,
        payload: 'successful operation',
      }),
    ).toEqual({ successMessage: 'successful operation' });
  });
  it('should handle RESET_ERROR', () => {
    expect(
      authReducer([], {
        type: types.RESET_ERROR,
        payload: 'unsuccessful operation',
      }),
    ).toEqual({ errorMessage: 'unsuccessful operation' });
  });
  it('should handle IMAGE_UPLOAD_LOADING', () => {
    expect(
      imageUploadReducer([], {
        type: types.IMAGE_UPLOAD_LOADING,
        payload: 'successful operation',
      }),
    ).toEqual({ status: { loading: true } });
  });
});
