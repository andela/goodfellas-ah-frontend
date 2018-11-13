import React from 'react';
import { shallow } from 'enzyme';
import AuthFormToggle from '../../../components/Auth/AuthFormToggle';

const setup = () => {
  const props = {
    children: { props: { formtype: 'signup' } },
  };

  const enzymeWrapper = shallow(<AuthFormToggle {...props} />);

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
