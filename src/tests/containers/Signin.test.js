import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SigninForm from '../../containers/SignupForm';
import Root from '../../root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <SigninForm />
    </Root>,
  );
});

afterEach(() => wrapped.unmount());

describe('Signin UI', () => {
  describe('render features', () => {
    test('container should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
