import React from 'react';
import toJson from 'enzyme-to-json';
import { UpdateArticles } from '../../containers/UpdateArticle';

describe('update artcicle container test suite', () => {
  const props = {
    status: {
      error: false,
      success: false,
    },
    updatedArticle: {},
    imageUploadStatus: {
      error: false,
      success: false,
    },
    updateArticle: jest.fn(),
    getAnArticle: jest.fn(),
  };
  const wrapper = shallow(<UpdateArticles {...props} match={{ params: { slug: 'we-are-here' } }} />);


  it('renders properly when mounted', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should not dispatch updateArticle when the update button is clicked without title or body', () => {
    const updateButton = wrapper.find('.article-whitebutton').at(0);
    updateButton.simulate('click', { preventDefault: jest.fn() });
    expect(props.updateArticle).not.toBeCalled();
    props.updateArticle.mockRestore();
  });
  it('dispatches updateArticle when the update button is clicked', () => {
    const updateButton = wrapper.find('.article-whitebutton').at(0);
    wrapper.setState({ title: 'some title', body: 'somebody' });
    updateButton.simulate('click', { preventDefault: jest.fn() });
    expect(props.updateArticle).toBeCalled();
    props.updateArticle.mockRestore();
  });
  describe('render', () => {
    test('container should render as expected', () => {
      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
    });
  });
});
