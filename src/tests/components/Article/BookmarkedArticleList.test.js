import React from 'react';
import { shallow } from 'enzyme';
// eslint-disable-next-line import/no-extraneous-dependencies
import toJson from 'enzyme-to-json';
import BookmarkedArticleList from '../../../components/article/BookmarkedArticleList';
import * as profileData from '../../mock/profileData';

describe('BookmarkedArticleList UI', () => {
  const emptyListComponent = shallow(<BookmarkedArticleList userId={1} articles={[]} article={{ authorId: 1, slug: 'some-sug', bookmarked: [] }} />);
  const listComponent = shallow(<BookmarkedArticleList userId={1} articles={profileData.bookmarkedArticles} article={{ authorId: 1, slug: 'some-sug', bookmarked: [] }} />);
  it('view should render as expected', () => {
    const tree = toJson(emptyListComponent);
    expect(tree).toMatchSnapshot();
  });
  it('view should render as expected', () => {
    const tree = toJson(listComponent);
    expect(tree).toMatchSnapshot();
  });
});
