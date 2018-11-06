import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LandingPage from '../../views/LandingPage';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<LandingPage />);
});

describe('LandingPage UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
