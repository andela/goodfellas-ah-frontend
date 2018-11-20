import React from 'react';
import toJson from 'enzyme-to-json';
import { CreateArticles } from '../../containers/CreateArticles';

describe('create artcicle container test suite', () => {
  const props = {
    status: {
      error: false,
      success: false,
    },
    publishedArticle: {},
    imageUploadStatus: {
      error: false,
      success: false,
    },
    publishArticle: jest.fn(),
  };
  const wrapper = shallow(<CreateArticles {...props} />);


  it('renders properly when mounted', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should not dispatch publishArticle when the publish button is clicked without title or body', () => {
    const publishButton = wrapper.find('.article-whitebutton').at(0);
    publishButton.simulate('click', { preventDefault: jest.fn() });
    expect(props.publishArticle).not.toBeCalled();
  });
  it('should dispatch publishArticle when the publish button is clicked with title and body', () => {
    const publishButton = wrapper.find('.article-whitebutton').at(0);
    wrapper.setState({ title: 'some title', body: 'somebody' });
    publishButton.simulate('click', { preventDefault: jest.fn() });
    expect(props.publishArticle).toBeCalled();
    props.publishArticle.mockRestore();
  });
  describe('render', () => {
    test('container should render as expected', () => {
      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
    });
  });
});
