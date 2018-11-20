import React from 'react';
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

  it('dispatches updateArticle when the update button is clicked', () => {
    const updateButton = wrapper.find('.article-whitebutton').at(0);
    updateButton.simulate('click', { preventDefault: jest.fn() });
    expect(props.updateArticle).toBeCalled();
    props.updateArticle.mockRestore();
  });
});
