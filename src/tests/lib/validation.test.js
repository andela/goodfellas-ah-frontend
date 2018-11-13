import validateAuth from '../../lib/validation';

describe('auth validation', () => {
  it('should not return error on success', () => {
    const fields = {
      password: 'mypassword',
      email: 'damafeez@gmaill.com',
    };
    const fieldNames = ['password', 'email'];
    const result = validateAuth(fields, fieldNames);
    expect(result).toEqual({ status: false });
  });
  it('should error on wrong email', () => {
    const fields = {
      password: 'mypassword',
      email: 'damafeeaillcom',
    };
    const fieldNames = ['password', 'email'];
    const result = validateAuth(fields, fieldNames);
    expect(result).toEqual({ status: true, email: 'You\'ve entered an invalid email' });
  });
});
