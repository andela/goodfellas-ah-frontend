import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchPage from '../../views/SearchArticles';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<SearchPage />);
});

describe('SearchPage UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
