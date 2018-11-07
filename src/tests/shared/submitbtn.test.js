
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Submitbtn from '../../components/shared/Submitbtn';
import Root from '../../root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <Submitbtn />
    </Root>,
  );
});

afterEach(() => wrapped.unmount());
describe('Submit btn', () => {
  describe('render', () => {
    test('container should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
