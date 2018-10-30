import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import App from '../../containers/App';
import '../../styles/styles.scss';

it('renders without crashing', () => {
  shallow(<App />);
});

it('contains welcome header', () => {
  const wrapper = shallow(<App />);
  const welcomeHeader = (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </nav>
  );
  expect(wrapper.contains(welcomeHeader)).toEqual(true);
});
