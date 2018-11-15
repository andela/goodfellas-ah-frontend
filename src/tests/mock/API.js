import { routes } from './profileData';

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
  },
  openRoutes: {
  },
};
