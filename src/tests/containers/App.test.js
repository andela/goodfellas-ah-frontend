import React from 'react';
import { shallow } from 'enzyme';
import App from '../../containers/App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('contains welcome header', () => {
  const wrapper = shallow(<App />);
  const welcomeHeader = (
    <header>
      <p>Welcome to Authors&apos; Haven</p>
    </header>
  );
  expect(wrapper.contains(welcomeHeader)).toEqual(true);
});
