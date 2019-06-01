import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BookmarkedArticles from '../../views/BookmarkedArticlesPage';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<BookmarkedArticles />);
});


describe('Bookmarked Articles UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
