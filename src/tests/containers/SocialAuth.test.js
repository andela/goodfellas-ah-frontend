import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SocialAuth } from '../../containers/SocialAuth';

let wrapped;
let wrappedError;

const history = {
  location: {
    search: {
      token: 'token',
      userId: 'userId'
    },
  },
  push: jest.fn(),
};
const socialSignin = (user, callback) => callback(true);
const socialSigninError = (user, callback) => callback(false);

beforeEach(() => {
  wrapped = shallow(<SocialAuth socialSignin={socialSignin} history={history} />);
  wrappedError = shallow(<SocialAuth socialSignin={socialSigninError} history={history} />);
});

describe('SocialAuth UI', () => {
  describe('render features', () => {
    test('container should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });

  describe('SocialAuth Athentication Flow', () => {
    it('redirects the user into the application when a token is returned', () => {
      expect(history.push).toBeCalledWith('/user/profile');
    });
    it('redirects the user into the application when an error is true', () => {
      expect(history.push).toBeCalledWith('/auth/signin');
    });
  });
});
