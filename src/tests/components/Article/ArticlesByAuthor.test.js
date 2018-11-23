import React from 'react';
import { shallow } from 'enzyme';
import ArticlesByAuthor from '../../../components/article/ArticlesByAuthor';
import * as profileData from '../../mock/profileData';

const setup = () => {
  const props = {
    articles: profileData.articles.data.articles,
    userFullName: 'Afeez Awoyemi',
    userId: 1,
    ownProfile: true,
  };

  const enzymeWrapper = shallow(<ArticlesByAuthor {...props} />);

  return {
    props,
    enzymeWrapper,
  };
};

describe('components', () => {
  describe('ProfileToolbar component', () => {
    it('should render as expected', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});
