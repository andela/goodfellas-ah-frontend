import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Root from '../../root';
import NotificationSettingsComponent, { NotificationSettings } from '../../components/NotificationSettings';

let wrapped;
let wrapper;

const notification = {
  notification: ['email', 'inApp'],
};

beforeEach(() => {
  wrapped = mount(
    <Root>
      <NotificationSettingsComponent
        notification={notification}
        updateNotification={jest.fn()}
      />
    </Root>,
  );

  wrapper = shallow(
    <NotificationSettings
      notification={notification}
      updateNotification={jest.fn()}
    />,
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

describe('Notifications Functionality', () => {
  it('should toggle change and configure email and inApp notification settings', () => {
    const toggleChange = wrapper.find('.toggle-click');
    toggleChange.simulate('change', {
      target: {
        checked: true,
      },
    });
  });

  it('should toggle change and configure email and inApp notification settings', () => {
    const toggleChange = wrapper.find('.toggle-click');
    toggleChange.simulate('change', {
      target: {
        checked: false,
      },
    });
  });
});
