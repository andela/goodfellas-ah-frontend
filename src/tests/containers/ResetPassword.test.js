import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import ResetPassword from '../../containers/ResetPassword';
import Root from '../../root';

let wrapped;

beforeEach(() => {
  wrapped = mount(

    <Root>
      <MemoryRouter initialEntries={[{ pathname: '/', key: 'testKey' }]}>
        <ResetPassword />
      </MemoryRouter>
    </Root>,

  );
});
afterEach(() => wrapped.unmount());


describe('ResetPassword UI', () => {
  describe('render features', () => {
    test('container should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
  describe('when typing into fields', () => {
    beforeEach(() => {
      wrapped.find('input').first().simulate('change', { target: { id: 'password', value: 'password' } });
      wrapped.find('input').at(1).simulate('change', { target: { id: 'confirmPassword', value: 'cpassword' } });
      wrapped.update();
    });

    it('shows that text has been entered into then password field', () => {
      expect(wrapped.find('input').first().prop('value')).toEqual('password');
    });

    it('shows that text has been entered into then confirm password field', () => {
      expect(wrapped.find('input').at(1).prop('value')).toEqual('cpassword');
    });
  });
});
