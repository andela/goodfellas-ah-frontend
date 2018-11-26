import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SideButtons } from '../../containers/SingleArticleSideButtons';

const props = {
  bookmarkArticles: (user, callback) => callback(true),
  removeBookmark: (user, callback) => callback(true),
};

describe('SideButtons UI', () => {
  const notBookmarked = shallow(<SideButtons userId={1} article={{ authorId: 1, slug: 'some-sug', bookmarked: [] }} {...props} />);
  const bookmarked = shallow(<SideButtons userId={1} article={{ authorId: 1, slug: 'some-sug', bookmarked: [{}] }} {...props} />);
  it('view should render as expected', () => {
    const tree = toJson(notBookmarked);
    expect(tree).toMatchSnapshot();
  });
  
  it('it should bookmark an article when bookmarked button is clicked', () => {
    notBookmarked.find('#bookmark').simulate('click');
    expect(notBookmarked.state().bookmarked).toEqual(true);
  });
  
  it('it should remove bookmark of an article when bookmarked button is clicked', () => {
    notBookmarked.setState({ bookmarked: true });
    notBookmarked.find('#bookmark').simulate('click');
    expect(notBookmarked.state().bookmarked).toEqual(false);
  });
});
