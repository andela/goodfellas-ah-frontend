import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Signin from '../../containers/Signin';
import Root from '../../root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <Signin />
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

    it('has two input fields and a button', () => {
      expect(wrapped.find('input').length).toEqual(2);
      expect(wrapped.find('button').length).toEqual(1);
    });
  });

  describe('when typing into fields', () => {
    beforeEach(() => {
      wrapped.find('input').first().simulate('change', { target: { value: 'user@email.com' } });
      wrapped.find('input').at(1).simulate('change', { target: { value: 'password' } });

      wrapped.update();
    });

    it('shows that text has been entered into then email field', () => {
      expect(wrapped.find('input').first().prop('value')).toEqual('user@email.com');
    });

    it('shows that text has been entered into then password field', () => {
      expect(wrapped.find('input').at(1).prop('value')).toEqual('password');
    });

    it('empties fields when form is submitted', () => {
      wrapped.find('form').simulate('submit');
      wrapped.update();

      expect(wrapped.find('input').first().prop('value')).toEqual('');
      expect(wrapped.find('input').at(1).prop('value')).toEqual('');
    });
  });
});
