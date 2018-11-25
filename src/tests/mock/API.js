import * as profileData from './profileData';
import * as articleData from './articleData';

export class CustomAPIError extends Error {
  constructor(message, status = 404, ...params) {
    super(message, ...params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomAPIError);
    }
    this.response = {
      status,
      data: {
        error: message,
        message,
      },
    };
  }
}
export const routes = {
  get: {
    '/user/profile/1': () => profileData.profile,
    '/user/followers/1': () => profileData.followers,
    '/user/followed/1': () => profileData.followedUsers,
    '/articles/author/1': () => profileData.articles,
    '/articles/user/1/favorite': () => profileData.favoritedArticles,
    '/user/notification': () => profileData.notifications,
  },
  put: {
    '/user/profile/1': () => profileData.updateProfile,
    '/articles/we-are-here': (payload) => {
      if (payload.title && payload.body) return articleData.updateArticleDetail;
      throw new CustomAPIError('All fields are required', 400);
    },
  },
  post: {
    '/user/follow/1': () => profileData.followUser,
    '/articles': (payload) => {
      if (payload.title && payload.body) return articleData.postArticle;
      throw new CustomAPIError('All fields are required', 400);
    },
    '/articles/somiso/tags': (payload) => {
      if (payload.tags) return articleData.addTagsDetail;
      throw new CustomAPIError('All fields are required', 400);
    },
    '/articles/a-new-article/react': (payload) => {
      if (payload && (payload.reaction === 1 || payload.reaction === -1)) return articleData.reactionAdded;
      throw new CustomAPIError('Invalid reaction value provided', 400);
    },
  },
  delete: {
    '/user/follow/1': () => profileData.followUser,
  },
};

const apiCall = (type, route, payload) => new Promise((resolve, reject) => {
  if (routes[type][route]) resolve(routes[type][route](payload));
  reject(new CustomAPIError('Invalid request, Route does not exist'));
});

export default {
  api: {
    get(route) {
      return apiCall('get', route);
    },
    put(route, payload) {
      return apiCall('put', route, payload);
    },
    post(route, payload) {
      return apiCall('post', route, payload);
    },
    delete(route) {
      return apiCall('delete', route);
    },
  },
  openRoutes: {
  },
};
