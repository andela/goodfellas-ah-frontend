import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Signup from '../../containers/SignupForm';
import Root from '../../root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <Signup />
    </Root>,
  );
});

afterEach(() => wrapped.unmount());

describe('Signup UI', () => {
  describe('render features', () => {
    test('container should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });

    it('has two input fields and a button', () => {
      expect(wrapped.find('input').length).toEqual(5);
      expect(wrapped.find('button').length).toEqual(1);
    });
  });
});
