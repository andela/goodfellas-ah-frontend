import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../../components/shared/Header';
import Root from '../../root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <Header />
    </Root>,
  );
});

afterEach(() => wrapped.unmount());

describe('Header UI', () => {
  describe('render features', () => {
    test('component should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
