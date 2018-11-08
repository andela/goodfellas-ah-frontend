import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ForgotPassword from '../../containers/Forgotpassword';
import Root from '../../root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <ForgotPassword />
    </Root>,
  );
});

afterEach(() => wrapped.unmount());
describe('ForgotPassword', () => {
  describe('render', () => {
    test('container should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
    it('has two input types', () => {
      expect(wrapped.find('input').length).toEqual(1);
      expect(wrapped.find('button').length).toEqual(1);
    });
  });
});
