import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ProfilePage from '../../views/ProfilePage';
import Root from '../../root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <ProfilePage />
    </Root>,
  );
});

afterEach(() => wrapped.unmount());

describe('Profile UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
