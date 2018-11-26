import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import NotificationsContainer, { Notifications } from '../../containers/Notifications';
import Root from '../../root';

let wrapped;
let notificationsMountedShallow;

const notification = [
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
];

const notificationFavourite = [
  {
    id: 4,
    authorId: 1,
    articleSlug: 'article-title-3',
    commentId: null,
    type: 'favoriteArticleComment',
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
];

const notificationDefault = [
  {
    id: 4,
    authorId: 1,
    articleSlug: 'article-title-3',
    commentId: null,
    type: 'default',
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
];


const notificationSettings = {
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
beforeEach(() => {
  wrapped = mount(
    <Root>
      <NotificationsContainer />
    </Root>,
  );

  notificationsMountedShallow = shallow(
    <Notifications
      notifications
      getNotification={notificationSettings.notification.getNotification}
      seenNotification={notificationSettings.notification.setNotification}
    />,
  );
});


describe('Notification UI', () => {
  describe('render features', () => {
    test('view should render as expected', () => {
      const tree = toJson(wrapped);
      expect(tree).toMatchSnapshot();
    });
  });
});

describe('Notification Functionality', () => {
  describe('ComponentWillReceiveProps', () => {
    it('should run lifecycle', () => {
      notificationsMountedShallow.setState({
        notifications: notification,
      });

      const inst = notificationsMountedShallow.instance();
      const cancelButton = notificationsMountedShallow.find('.notification-close-button');
      const singleNotification = notificationsMountedShallow.find('.noitification-single');
      singleNotification.simulate('click');
      cancelButton.simulate('click');
      inst.displayNotifications();
      expect(inst).not.toBeNull();
    });

    it('should run lifecycle', () => {
      notificationsMountedShallow.setState({
        notifications: notificationFavourite,
      });

      const inst = notificationsMountedShallow.instance();
      const cancelButton = notificationsMountedShallow.find('.notification-close-button');
      const singleNotification = notificationsMountedShallow.find('.noitification-single');
      singleNotification.simulate('click');
      cancelButton.simulate('click');
      inst.displayNotifications();
      expect(inst).not.toBeNull();
    });

    it('should run lifecycle', () => {
      notificationsMountedShallow.setState({
        notifications: notificationDefault,
      });

      const inst = notificationsMountedShallow.instance();
      inst.displayNotifications();
      inst.handleSeen();
      expect(inst).not.toBeNull();
    });
  });
});
