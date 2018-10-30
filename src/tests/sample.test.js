import authReducer from '../reducers/authReducer';
import { registerUser } from '../actions/authActions';

describe('auth reducer', () => {
  test('is correct', () => {
    const finalState = {
      isAuthenticated: false,
      user: { name: 'tony', email: 'tony@gmail.com' },
    };
    const action = registerUser({ name: 'tony', email: 'tony@gmail.com' });
    expect(authReducer(undefined, action)).toEqual(finalState);
  });
});
