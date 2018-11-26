import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import BookmarkedArticles from '../../containers/BookmarkedArticles';
import Root from '../../root';

let wrapped;

const mockState = {
  auth: {
    authenticated: null,
    userId: null,
    user: null,
    ownProfile: { userId: 1 },
  },
};

beforeEach(() => {
  wrapped = mount(
    <Root initialState={mockState}>
      <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
        <BookmarkedArticles />
      </MemoryRouter>
    </Root>,
  );
});

afterEach(() => wrapped.unmount());

describe('BookmarkedArticles UI', () => {
  it('view should render as expected', () => {
    const tree = toJson(wrapped);
    expect(tree).toMatchSnapshot();
  });
});
