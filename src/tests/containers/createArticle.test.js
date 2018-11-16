import React from 'react';
import { CreateArticles } from '../../containers/CreateArticles';

describe('create artcicle component test suite', () => {
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

  it('dispatches publishArticle when the publish button is clicked', () => {
    const publishButton = wrapper.find('.article-whitebutton').at(0);
    publishButton.simulate('click', { preventDefault: jest.fn() });
    expect(props.publishArticle).toBeCalled();
  });
});
