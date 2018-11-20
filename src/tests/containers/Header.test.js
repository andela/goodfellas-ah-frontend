
import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import ArticleHeader, { Header } from '../../components/shared/Header';
import Root from '../../root';

let wrapped;
let wrapper;
let wrapperHeader;
let mountHeader;
let authFalseHeader;
let mountHeaderNullProfile;
let wrapperHeaderAuth;
let mountNotificationsLanding;
const auth = {
  auth: {
    authenticated: true,
  },
  ownProfile: { userId: 1 },
  notification: {
    notifications: true,
    setNotification() {
      return true;
    },
    getNotification() {
      return true;
    },
  },
};

const notifications = {
  count: 15,
  rows: [
    {
      id: 4,
      authorId: 1,
      articleSlug: 'article-title-3',
      commentId: null,
      type: 'followerArticle',
      seen: false,
      createdAt: '2018-11-15T11:59:37.329Z',
      updatedAt: '2018-11-15T19:27:43.885Z',
      author: {
        firstname: 'tony',
        lastname: 'ugwu',
      },
      article: {
        favorited: false,
        favoritesCount: 0,
        id: 4,
        slug: 'article-title-3',
        title: 'article title',
        description: 'article descr',
        body: 'article bodyarticle bodyarticle bodyarticle bodyarticle bodyarticle bodyarticle bodyarticle body',
        image: null,
        tagList: null,
        read_time: '1 minute',
        averageRating: null,
        authorId: 1,
        published: true,
        archived: false,
        createdAt: '2018-11-15T11:59:37.299Z',
        updatedAt: '2018-11-15T11:59:37.299Z',
        favorite: [],
      },
      comment: null,
    },
  ],
};
const mockState = {
  auth: {
    authenticated: null,
    userId: null,
    user: null,
    ownProfile: { userId: 1 },
  },
};
const authTest = {
  auth: {
    authenticated: false,
  },
  notification: {
    notifications: false,
  },
};

beforeEach(() => {
  wrapped = mount(
    <Root initialState={mockState}>
      <MemoryRouter initialEntries={[{ key: 'testkey' }]}>
        <ArticleHeader />
      </MemoryRouter>
    </Root>,
  );

  wrapper = shallow(
    <Header
      parentComponent="landingpage"
      auth={auth.auth.authenticated}
      setNotification={auth.notification.setNotification}
      getNotification={auth.notification.getNotification}
      profile={{ image: 'testImageUrl' }}
      userId={auth.ownProfile.userId}
    />,
  );

  wrapperHeader = shallow(
    <Header
      parentComponent="notlandingpage"
      auth={authTest.auth.authenticated}
      setNotification={auth.notification.setNotification}
      getNotification={auth.notification.getNotification}
      profile={{ image: null }}
      userId={auth.ownProfile.userId}
    />,
  );

  wrapperHeaderAuth = shallow(
    <Header
      parentComponent="landingpage"
      auth={authTest.auth.authenticated}
      setNotification={auth.notification.setNotification}
      getNotification={auth.notification.getNotification}
      profile={{ image: null }}
      userId={auth.ownProfile.userId}
    />,
  );

  mountHeaderNullProfile = shallow(
    <Header
      parentComponent="notlandingpage"
      setNotification={auth.notification.setNotification}
      getNotification={auth.notification.getNotification}
      auth={auth.auth.authenticated}
      profile={{ image: null }}
      userId={auth.ownProfile.userId}
    />,
  );

  mountHeader = mount(
    <MemoryRouter>
      <Header
        parentComponent="notlandingpage"
        auth={auth.auth.authenticated}
        setNotification={auth.notification.setNotification}
        getNotification={auth.notification.getNotification}
        profile={{ image: 'testImageUrl' }}
        userId={auth.ownProfile.userId}
      />
    </MemoryRouter>,
  );

  mountNotificationsLanding = mount(
    <MemoryRouter>
      <Header
        parentComponent="landingpage"
        auth={auth.auth.authenticated}
        setNotification={auth.notification.setNotification}
        getNotification={auth.notification.getNotification}
        inAppStatus={false}
        profile={{ image: 'testImageUrl' }}
        userId={auth.ownProfile.userId}
      />
    </MemoryRouter>,
  );

  authFalseHeader = mount(
    <MemoryRouter>
      <Header
        parentComponent="notlandingpage"
        setNotification={auth.notification.setNotification}
        getNotification={auth.notification.getNotification}
        auth={authTest.auth.authenticated}
        profile={{ image: 'testImageUrl' }}
        userId={auth.ownProfile.userId}
      />
    </MemoryRouter>,
  );
});

afterEach(() => wrapped.unmount());
describe('Loading', () => {
  describe('render', () => {
    test('container should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});

test('Header functionality', () => {
  const inst = wrapper.instance();
  expect(inst).toBeInstanceOf(Header);
  expect(inst).not.toBeNull();
});

test('Header functionality', () => {
  const inst = wrapperHeader.instance();
  expect(inst).toBeInstanceOf(Header);
  expect(inst).not.toBeNull();
});

test('Header functionality for profile without image', () => {
  const inst = mountHeaderNullProfile.instance();
  expect(inst).toBeInstanceOf(Header);
  expect(inst).not.toBeNull();
});

test('Header functionality for profile without image', () => {
  const inst = wrapperHeaderAuth.instance();
  expect(inst).toBeInstanceOf(Header);
  expect(inst).not.toBeNull();
});

it('should dropdown search bar filter section', () => {
  mountHeader.find('.dropdown-click').simulate('click');
  mountHeader.find('.search-click').simulate('click');
  mountHeader.find('.search-click').simulate('click');
});

it('should toggle navbar', () => {
  authFalseHeader.find('.navbar-toggler').simulate('click');
  authFalseHeader.find('.navbar-toggler').simulate('click');
});

it('should toggle searchbar', () => {
  mountHeader.find('.searchbar-toggle-mobile').simulate('click');
  mountHeader.find('.searchbar-toggle-mobile').simulate('click');
});

it('should click search', () => {
  mountHeader.find('.searchbar-toggle').simulate('click');
  mountHeader.find('.search-click').simulate('click');
  mountHeader.find('.searchbar-toggle').simulate('click');
});

it('should spy on change search', () => {
  mountHeader.find('.searchbar').simulate('change');
  mountHeader.find('#searchKeyword').simulate('change');
});

it('should spy on change search', () => {
  wrapper.setState({
    inApp: true,
    notifications,
  });

  const inst = wrapper.instance();
  expect(inst).toBeInstanceOf(Header);
  expect(inst).not.toBeNull();
});

it('should spy on change search', () => {
  mountHeaderNullProfile.setState({
    inApp: true,
    notifications,
  });

  const inst = mountHeaderNullProfile.instance();
  expect(inst).toBeInstanceOf(Header);
  expect(inst).not.toBeNull();
});

it('should spy on change search', () => {
  console.log(mountNotificationsLanding);
  mountNotificationsLanding.setProps({
    inAppStatus: true,
    notifications,
  });
});
