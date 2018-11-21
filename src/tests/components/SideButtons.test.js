import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SideButtons } from '../../containers/SingleArticleSideButtons';
import { articleResponse } from '../mock/articleData';

let wrapped;

const setup = () => {
  const props = {
    article: articleResponse.data.data,
  };
  const enzymeWrapper = shallow(<SideButtons {...props} />);
  return { props, enzymeWrapper };
};
beforeEach(() => {
  wrapped = setup().enzymeWrapper;
});


describe('SideButtons UI', () => {
  it('view should render as expected', () => {
    wrapped.find('#more').simulate('click');
    expect(wrapped).toMatchSnapshot();
  });
});
