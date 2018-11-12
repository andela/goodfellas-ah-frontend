import React from 'react';
import { shallow } from 'enzyme';
import FollowingList from '../../../components/profile/FollowingList';
import * as profileData from '../../mock/profileData';

const setup = () => {
  const props = {
    following: profileData.followers.data.data.followers,
    userFullName: 'Afeez Awoyemi',
    history: { push: jest.fn() },
  };

  const enzymeWrapper = shallow(<FollowingList {...props} />);

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
