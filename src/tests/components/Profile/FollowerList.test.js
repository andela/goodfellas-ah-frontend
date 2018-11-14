import React from 'react';
import { shallow } from 'enzyme';
import FollowerList from '../../../components/profile/FollowerList';
import * as profileData from '../../mock/profileData';

const setup = () => {
  const props = {
    followers: profileData.followers.data.data.followers,
    userFullName: 'Afeez Awoyemi',
    history: { push: jest.fn() },
  };

  const enzymeWrapper = shallow(<FollowerList {...props} />);

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
