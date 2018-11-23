import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import AddTags, { Tags } from '../../../components/article/Tags';
import Root from '../../../root';

const mockAddTags = mount(
  <Root>
    <MemoryRouter initialEntries={[{ key: 'testkey' }]}>
      <AddTags />
    </MemoryRouter>
  </Root>,
);

const publishedArticleError = {
  status: {
    success: true,
    error: false,
  },
};

const testAddTagsMount = shallow(
  <Tags publishedArticle={['home']} publishedArticleError={publishedArticleError} />,
);

describe('Tags UI', () => {
  describe('render features', () => {
    test('component should render as expected', () => {
      const tree = toJson(mockAddTags);
      expect(tree).toMatchSnapshot();
    });
  });
});

describe('Tags Functionality', () => {
  describe('handle functionality', () => {
    it('should simulate publish', () => {
      const preventDefault = jest.fn();
      const publishArticleButton = testAddTagsMount.find('.publish-article-button');
      publishArticleButton.simulate('click', {
        preventDefault,
      });
    });

    it('should simulate submit', () => {
      const mockedEvent = {
        preventDefault: jest.fn(),
        target: {
          reset: jest.fn(),
        },
      };
      const submitButton = testAddTagsMount.find('form');

      const instance = testAddTagsMount.instance();
      instance.refs = {
        getTags: {
          disabled: false,
          value: 'true',
        },
      };

      submitButton.simulate('submit', mockedEvent);
    });

    it('should simulate submit but fail to publish', () => {
      const mockedEvent = {
        preventDefault: jest.fn(),
        target: {
          reset: jest.fn(),
        },
      };
      const submitButton = testAddTagsMount.find('form');

      const instance = testAddTagsMount.instance();
      instance.refs = {
        getTags: {
          disabled: false,
          value: 'true',
        },
      };
      instance.props.publishedArticleError.status.error = true;

      submitButton.simulate('submit', mockedEvent);
    });

    it('should simulate click', () => {
      const mockedEvent = {
        preventDefault: jest.fn(),
        target: {
          previousSibling: {
            textContent: 'home',
          },
          reset: jest.fn(),
        },
      };

      const clickButton = testAddTagsMount.find('.new-tag-cancel').at(0);

      const instance = testAddTagsMount.instance();

      instance.state.articleStatus = true;
      instance.state.tags = ['true'];
      instance.refs = {
        getTags: {
          disabled: false,
          value: '',
        },
      };

      clickButton.simulate('click', mockedEvent);

      instance.state.tags = ['true', 'safe', 'wish', 'think', 'home'];

      clickButton.simulate('click', mockedEvent);
    });
  });
});
