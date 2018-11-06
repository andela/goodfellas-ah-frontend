import authReducer from '../../reducers/authReducer';
import * as types from '../../actions/actionTypes';


describe('auth_reducer', () => {
  describe('INITIAL_STATE', () => {
    test('is correct', () => {
      const action = {
        type: 'wrong_action',
        payload: '',
      };
      const initialState = {
        authenticated: '',
        errorMessage: '',
        successMessage: '',
      };
      expect(authReducer(undefined, action)).toEqual(initialState);
    });
  });
  describe('SUCCESS_MSG', () => {
    test('returns the correct state', () => {
      const action = { type: types.SUCCESS_MSG, payload: 'operation was successful' };
      const expectedState = {
        authenticated: '',
        errorMessage: '',
        successMessage: 'operation was successful',
      };
      expect(authReducer(undefined, action)).toEqual(expectedState);
    });
  });
  describe('RESET_ERROR', () => {
    test('returns the correct state', () => {
      const action = { type: types.RESET_ERROR, payload: 'operation was unsuccessful' };
      const expectedState = {
        authenticated: '',
        errorMessage: 'operation was unsuccessful',
        successMessage: '',
      };
      expect(authReducer(undefined, action)).toEqual(expectedState);
    });
  });
});
