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
    expect(result).toEqual({ status: true, email: 'You\'ve entered an invalid email.' });
  });
  it('should error on non-alphanumeric password', () => {
    const fields = {
      password: '.13',
      email: 'damafeez@gmail.com',
    };
    const fieldNames = ['password', 'email'];
    const result = validateAuth(fields, fieldNames);
    expect(result).toEqual({ status: true, password: 'Your password must be an alphanumberic characters greater than 4.' });
  });
  it('should error on non-alphanumeric password', () => {
    const fields = {
      password: 'mypassword',
      email: 'damafeez@gmail.com',
      confirmPassword: 'myotherpassword',
    };
    const fieldNames = ['password', 'email', 'confirmPassword'];
    const result = validateAuth(fields, fieldNames);
    expect(result).toEqual({ status: true, confirmPassword: 'Passwords do not match.' });
  });
});
