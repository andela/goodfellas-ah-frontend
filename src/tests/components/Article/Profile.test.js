import React from 'react';
import { shallow } from 'enzyme';
import ProfileArticle from '../../../components/article/Profile';
import * as profileData from '../../mock/profileData';

const setup = () => {
  const props = {
    article: profileData.articles.data.articles[0],
    userFullName: 'Afeez Awoyemi',
  };

  const enzymeWrapper = shallow(<ProfileArticle {...props} />);

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
