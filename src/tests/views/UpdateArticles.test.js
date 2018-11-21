import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UpdateArticle from '../../views/UpdateArticle';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<UpdateArticle />);
});


describe('Update Article UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
