import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import Auth from '../../components/layout/Auth';
import Root from '../../root';

let wrapped;

beforeEach(() => {
  wrapped = shallow(

    <Root>
      <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
        <Auth />
      </MemoryRouter>
    </Root>,

  );
});
afterEach(() => wrapped.unmount());


describe('Auth layout', () => {
  describe('render features', () => {
    test('container should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
