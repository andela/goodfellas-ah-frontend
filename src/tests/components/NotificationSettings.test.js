import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Root from '../../root';
import NotificationSettings from '../../components/NotificationSettings';

let wrapped;


beforeEach(() => {
  wrapped = mount(
    <Root>
      <NotificationSettings />
    </Root>,
  );
});

describe('Notification UI', () => {
  describe('render features', () => {
    test('component should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
    it('should dropdown search bar filter section', () => {
      wrapped.find('.toggle-click').simulate('click');
    });
  });
});
