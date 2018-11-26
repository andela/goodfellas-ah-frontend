import React from 'react';
import { shallow } from 'enzyme';
import { Profile } from '../../../components/article/Profile';
import * as profileData from '../../mock/profileData';

const setup = () => {
  const props = {
    article: profileData.articles.data.articles[0],
    author: 'Afeez Awoyemi',
    userId: 1,
    history: { push: jest.fn() },
  };

  const enzymeWrapper = shallow(<Profile {...props} />);

  return {
    props,
    enzymeWrapper,
  };
};

describe('components', () => {
  describe('ProfileToolbar component', () => {
    it('should render as expected', () => {
      const { enzymeWrapper, props } = setup();
      enzymeWrapper.find('.profile-article_user-img').simulate('click', { stopPropagation: jest.fn() });
      enzymeWrapper.find('.profile-article_username').simulate('click', { stopPropagation: jest.fn() });
      enzymeWrapper.find('.edit').simulate('click', { stopPropagation: jest.fn() });
      enzymeWrapper.find('.profile-article').simulate('click');
      expect(props.history.push).toBeCalled();
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});
