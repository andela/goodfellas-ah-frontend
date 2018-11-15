import React from 'react';
import { shallow } from 'enzyme';
import InputBox from '../../../components/shared/InputBox';

const setup = () => {
  const props = {
    value: 'Ade',
    placeholder: 'username',
    handleChange: jest.fn(),
  };

  const enzymeWrapper = shallow(<InputBox {...props} />);

  return {
    props,
    enzymeWrapper,
  };
};
describe('components', () => {
  describe('Loading component', () => {
    it('should render as expected', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});
