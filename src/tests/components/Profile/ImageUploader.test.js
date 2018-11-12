import React from 'react';
import { shallow } from 'enzyme';
import ImageUploader from '../../../components/profile/ImageUploader';

const setup = () => {
  const props = {
    canReset: false,
    type: 'follower',
    imageRead: jest.fn(),
    resetImage: jest.fn(),
  };

  const enzymeWrapper = shallow(<ImageUploader {...props} />);

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
