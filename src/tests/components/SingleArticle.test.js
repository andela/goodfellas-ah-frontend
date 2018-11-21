import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SingleArticle from '../../components/SingleArticle';

let wrapped;

const props = {
  article: { read_time: 1 },
};

beforeEach(() => {
  wrapped = shallow(<SingleArticle {...props} />);
});

describe('Signin UI', () => {
  describe('render features', () => {
    test('container should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});
