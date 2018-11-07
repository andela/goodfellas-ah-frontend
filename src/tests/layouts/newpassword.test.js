import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import NewPassword from '../../components/layout/NewPassword';
import Root from '../../root';

let wrapped;

beforeEach(() => {
  wrapped = mount(

    <Root>
      <MemoryRouter initialEntries={[{ pathname: '/', key: 'testKey' }]}>
        <NewPassword />
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
});
