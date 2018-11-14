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
const setup2 = () => {
  const props = {
    canReset: true,
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
  describe('ProfileToolbar component', () => {
    it('should render as expected', () => {
      const { enzymeWrapper } = setup2();
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});
