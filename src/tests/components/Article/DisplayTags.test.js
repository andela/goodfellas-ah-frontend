import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import Tags from '../../../components/article/DisplayTags';
import Root from '../../../root';


const articles = {
  tagList: ['tag', 'tags'],
};

const mockDisplayTags = mount(
  <Root>
    <MemoryRouter initialEntries={[{ key: 'testkey' }]}>
      <Tags articles={articles} />
    </MemoryRouter>
  </Root>,
);

describe('Display Tags UI', () => {
  describe('render features', () => {
    test('component should render as expected', () => {
      const tree = toJson(mockDisplayTags);
      expect(tree).toMatchSnapshot();
    });
  });
});
