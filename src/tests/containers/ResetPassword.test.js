import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import ResetPassword from '../../containers/ResetPassword';
import Root from '../../root';

let wrapped;

beforeEach(() => {
  wrapped = shallow(

    <Root>
      <MemoryRouter>
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
});
