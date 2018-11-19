import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import Root from '../../root';
import NotificationSettings from '../../components/NotificationSettings';

let wrapped;


beforeEach(() => {
  wrapped = mount(
    <Root>
      <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
        <NotificationSettings />
      </MemoryRouter>
    </Root>,
  );
});

describe('Notification UI', () => {
  describe('render features', () => {
    test('component should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
