import React from 'react';
import { shallow } from 'enzyme';
import { Article } from '../../containers/SingleArticle';

describe('containers', () => {
  describe('SingleArticle container', () => {
    const setup = () => {
      const props = {
        userId: '',
        article: {},
        error: '',
        getAnArticle: jest.fn(),
        getComments: jest.fn(),
        match: {
          params: { slug: 'some-slug' },
        },
      };

      const enzymeWrapper = shallow(<Article {...props} />);

      return {
        props,
        enzymeWrapper,
      };
    };
    it('should render as expected', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
  describe('SingleArticle container :Error', () => {
    const setup = () => {
      const props = {
        userId: null,
        article: null,
        error: 'this is an error',
        getAnArticle: jest.fn(),
        getComments: jest.fn(),
        match: {
          params: { slug: 'some-slug' },
        },
      };

      const enzymeWrapper = shallow(<Article {...props} />);

      return {
        props,
        enzymeWrapper,
      };
    };
    it('should render as expected', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});
