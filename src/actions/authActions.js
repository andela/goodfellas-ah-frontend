import { TEST_DISPATCH } from './types';

exports.registeruser = (userData) => ({
  type: TEST_DISPATCH,
  payload: userData,
});
