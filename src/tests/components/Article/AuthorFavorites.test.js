import React from 'react';
import { shallow } from 'enzyme';
import AuthorFavorites from '../../../components/article/AuthorFavorites';
import * as profileData from '../../mock/profileData';

const setup = () => {
  const props = {
    articles: profileData.favoritedArticles.data.articles,
    userFullName: 'Afeez Awoyemi',
  };

  const enzymeWrapper = shallow(<AuthorFavorites {...props} />);

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
