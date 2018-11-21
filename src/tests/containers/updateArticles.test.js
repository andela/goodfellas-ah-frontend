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
  it('should handle upload', () => {
    const instance = wrapper.instance();
    instance.imageUploaded('http://dummy-url');
    instance.forceUpdate();
    wrapper.update();
  });
  it('should handle submission errors', () => {
    const preventDefault = jest.fn();
    const btn = wrapper.find('.article-fixed-buttons > button');
    btn.simulate('click', {
      preventDefault,
    });
    expect(preventDefault).toBeCalled();
    const instance = wrapper.instance();
    instance.setState({
      title: 'valid title',
      body: null,
    });
    instance.forceUpdate();
    btn.simulate('click', {
      preventDefault: jest.fn(),
    });
    expect(preventDefault).toBeCalled();
  });
  it('should handle change', () => {
    const instance = wrapper.instance();
    instance.handleChange({
      target: {
        name: 'body',
        value: 'test',
      },
    });
    instance.forceUpdate();
    expect(instance.state.body).toEqual('test');
  });
});
it('should call componentDidUpdate', () => {
  const props1 = {
    status: {
      error: false,
      success: false,
    },
    updatedArticle: {},
    imageUploadStatus: {
      error: false,
      success: false,
    },
    match: {
      params: {
        slug: 'anyslug',
      },
    },
    updateArticle: jest.fn(),
    getAnArticle: jest.fn(),
  };
  const wrapper1 = shallow(<UpdateArticles {...props1} />);
  const newProps = {
    history: {
      push: jest.fn(),
    },
    updatedArticle: {
      article: {
        slug: 'dummy-slug',
      },

      match: {
        params: {
          slug: 'anyslug',
        },
      },
    },
    status: {
      success: false,
      error: true,
    },
  };
  wrapper1.setProps(newProps);
  wrapper1.update();
  expect(newProps.history.push).not.toBeCalled();
});
it('should call componentDidUpdate', () => {
  jest.useFakeTimers();
  const props1 = {
    status: {
      error: false,
      success: false,
    },
    updatededArticle: {},
    imageUploadStatus: {
      error: false,
      success: false,
    },
    match: {
      params: {
        slug: 'anyslug',
      },
    },
    updateArticle: jest.fn(),
    getAnArticle: jest.fn(),
  };
  const wrapper1 = shallow(<UpdateArticles {...props1} />);
  const newProps = {
    history: {
      push: jest.fn(),
    },
    updatedArticle: {
      article: {
        slug: 'dummy-slug',
      },
    },
    match: {
      params: {
        slug: 'anyslug',
      },
    },
    status: {
      success: true,
      error: false,
    },
  };
  wrapper1.setProps(newProps);
  wrapper1.update();

  jest.runAllTimers();
  const value = `/articles/${newProps.match.params.slug}`;
  expect(newProps.history.push).toBeCalled();
  expect(newProps.history.push).toBeCalledWith(value);
});
