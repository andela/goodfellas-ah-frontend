import React from 'react';
import { shallow } from 'enzyme';
import Loading, { Loader } from '../../../components/shared/Loading';

const loading = shallow(<Loading />);
const loader = shallow(<Loader />);

describe('components', () => {
  describe('Loading component', () => {
    it('should render as expected', () => {
      expect(loading).toMatchSnapshot();
    });
  });
  describe('Loading component', () => {
    it('should render as expected', () => {
      expect(loader).toMatchSnapshot();
    });
  });
});
