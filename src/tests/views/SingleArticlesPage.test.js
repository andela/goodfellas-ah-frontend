import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SingleArticle from '../../views/SingleArticlePage';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<SingleArticle />);
});


describe('Single Articles UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
