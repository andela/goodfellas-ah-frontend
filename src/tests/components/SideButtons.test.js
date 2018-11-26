import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SideButtons from '../../components/article/SideButtons';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<SideButtons userId={1} article={{ authorId: 1, slug: 'some-sug' }} />);
});


describe('SideButtons UI', () => {
  it('view should render as expected', () => {
    const tree = toJson(wrapped);
    expect(tree).toMatchSnapshot();
  });
});
