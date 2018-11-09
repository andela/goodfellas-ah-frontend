import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SocialButtonList from '../../components/Auth/SocialButtonList';
import Root from '../../root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <SocialButtonList />
    </Root>,
  );
});

afterEach(() => wrapped.unmount());

describe('SocialButtonList UI', () => {
  describe('render features', () => {
    test('container should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
