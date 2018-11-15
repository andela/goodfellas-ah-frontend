import * as profileData from './profileData';
import * as articleData from './articleData';

export const routes = {
  get: {
    '/user/profile/1': profileData.profile,
    '/user/followers/1': profileData.followers,
    '/user/followed/1': profileData.followedUsers,
    '/articles/author/1': profileData.articles,
    '/articles/user/1/favorite': profileData.favoritedArticles,
  },
  put: {
    '/user/profile/1': profileData.updateProfile,
  },
  post: {
    '/articles': articleData.postArticle,
  },
};
class CustomAPIError extends Error {
  constructor(message, ...params) {
    super(message, ...params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomAPIError);
    }
    this.response = {
      status: 404,
      data: {
        error: message,
        message,
      },
    };
  }
}
const apiCall = (type, route) => new Promise((resolve, reject) => {
  if (routes[type][route]) resolve(routes[type][route]);
  reject(new CustomAPIError('Invalid request, Route does not exist'));
});

export default {
  api: {
    get(route) {
      return apiCall('get', route);
    },
    put(route) {
      return apiCall('put', route);
    },
    post(route) {
      console.log('I got here', route);
      return apiCall('post', route);
    },
  },
  openRoutes: {
  },
};
