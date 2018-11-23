import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SocialAuth } from '../../containers/SocialAuth';

let wrapped;
const url = '?token=eyJhbGciOiJIUzI1NiIsInR5cCeyJpZCI6MiwNTQyOTg4NzU3LCJleHAiOjE1NDMwNzUxNTd9.I&userId=2';
const urlError = '?error=true';
const history = {
  location: {
    search: url,
  },
  push: jest.fn(),
};

const historyError = {
  location: {
    search: urlError,
  },
  push: jest.fn(),
};

const socialSignin = (user, callback) => callback(true);
const socialSigninError = (user, callback) => callback(false);
const showSocialSigninError = (error, callback) => callback();

beforeEach(() => {
  wrapped = shallow(<SocialAuth socialSignin={socialSignin} history={history} />);
  shallow(<SocialAuth socialSignin={socialSigninError} history={history} />);
  shallow(<SocialAuth showSignError={showSocialSigninError} history={historyError} />);
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
    it('redirects the user to the signin page when invalid details are passed', () => {
      expect(history.push).toBeCalledWith('/auth/signin');
    });

    it('redirects the user to the signin page when error is true', () => {
      expect(history.push).toBeCalledWith('/auth/signin');
    });
  });
});
