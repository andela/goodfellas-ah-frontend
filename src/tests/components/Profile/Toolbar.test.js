import React from 'react';
import { shallow } from 'enzyme';
import Toolbar from '../../../components/profile/Toolbar';

const setup = () => {
  const props = {
    nav: {
      Articles: 1,
      Followers: 3,
      Following: 0,
      Favorites: 12,
    },
    profileView: 'Articles',
    handleClick: jest.fn(),
  };

  const enzymeWrapper = shallow(<Toolbar {...props} />);

  return {
    props,
    enzymeWrapper,
  };
};

describe('components', () => {
  describe('ProfileToolbar component', () => {
    it('should render', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});
