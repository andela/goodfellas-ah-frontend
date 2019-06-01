import React from 'react';
import { shallow } from 'enzyme';
import { SideButtons } from '../../containers/SingleArticleSideButtons';
import { articleResponse } from '../mock/articleData';

let wrapped;
const props = {
  article: articleResponse.data.data,
  react: jest.fn(),
};

beforeEach(() => {
  wrapped = shallow(<SideButtons {...props} />);
});


describe('SideButtons UI', () => {
  it('view should render as expected', () => {
    wrapped.find('#more').simulate('click');
    expect(wrapped).toMatchSnapshot();
  });
  it('it should react when like is clicked', () => {
    wrapped.find('#love').simulate('click');
    expect(props.react).toHaveBeenCalledWith('a-new-article', undefined);
  });
  it('it should react when dislike is clicked', () => {
    wrapped.find('#dislike').simulate('click');
    expect(props.react).toHaveBeenCalledWith('a-new-article', -1);
  });
});
