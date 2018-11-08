import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import App from '../../containers/App';
import Root from '../../root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
        <App />
      </MemoryRouter>
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
