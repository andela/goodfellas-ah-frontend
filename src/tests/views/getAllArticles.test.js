import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AllArticlePage from '../../views/AllArticles';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<AllArticlePage />);
});

describe('ForgotPasswordPageUI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
