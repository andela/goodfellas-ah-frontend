import React from 'react';
import { shallow } from 'enzyme';
import DefaultLayout from '../../../components/layout/DefaultLayout';
import * as profileData from '../../mock/profileData';

const enzymeWrapper = shallow(<DefaultLayout />);

describe('components', () => {
  describe('ProfileToolbar component', () => {
    it('should render as expected', () => {
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});
