import React from 'react';
import { shallow } from 'enzyme';
import RelationshipCard from '../../../components/profile/RelationshipCard';
import * as profileData from '../../mock/profileData';

const setup = () => {
  const props = {
    user: profileData.followers.data.data.followers[0].follower,
    type: 'follower',
    handleClick: jest.fn(),
  };

  const enzymeWrapper = shallow(<RelationshipCard {...props} />);

  return {
    props,
    enzymeWrapper,
  };
};

describe('components', () => {
  describe('ProfileToolbar component', () => {
    it('should render as expected', () => {
      const { enzymeWrapper, props } = setup();
      enzymeWrapper.find('.follow-card').simulate('click');
      expect(props.handleClick).toBeCalled();
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});
