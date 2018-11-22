import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SideButtons from '../../components/article/SideButtons';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<SideButtons />);
});


describe('SideButtons UI', () => {
  it('view should render as expected', () => {
    const tree = toJson(wrapped);
    expect(tree).toMatchSnapshot();
  });
});
