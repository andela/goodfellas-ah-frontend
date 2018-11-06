import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Hero from '../../views/Hero';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Hero />);
});

describe('Hero UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
