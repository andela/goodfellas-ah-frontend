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
  it('should call componentDidUpdate', () => {
    const props1 = {
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
    const wrapper1 = shallow(<CreateArticles {...props1} />);
    const newProps = {
      history: {
        push: jest.fn(),
      },
      publishedArticle: {
        article: {
          slug: 'dummy-slug',
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
      publishedArticle: {},
      imageUploadStatus: {
        error: false,
        success: false,
      },
      publishArticle: jest.fn(),
    };
    const wrapper1 = shallow(<CreateArticles {...props1} />);
    const newProps = {
      history: {
        push: jest.fn(),
      },
      publishedArticle: {
        article: {
          slug: 'dummy-slug',
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
    const value = `/articles/${newProps.publishedArticle.article.slug}`;
    expect(newProps.history.push).toBeCalled();
    expect(newProps.history.push).toBeCalledWith(value);
  });
});
