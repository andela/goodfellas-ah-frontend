import profileReducer from '../../reducers/profileReducer';
import * as types from '../../actions/actionTypes';
import initialState from '../../reducers/initialState';
import * as profileData from '../mock/profileData';

describe('fetchProfile reducer', () => {
  it('should return the initial state', () => {
    expect(profileReducer(undefined, {})).toEqual(initialState.profile);
  });

  const { user, ...profile } = profileData.setProfile[0].data.data;
  it('should handle SET_PROFILE', () => {
    expect(
      profileReducer([], {
        type: types.SET_PROFILE,
        payload: profileData.setProfile,
      }),
    ).toEqual({
      user,
      profile,
      followers: profileData.setProfile[1].data.data.followers,
      following: profileData.setProfile[2].data.data.followedUsers,
      articles: profileData.setProfile[3].data.articles,
      favorites: profileData.setProfile[4].data.articles,
    });
  });
  it('should handle PROFILE_NAVIGATION', () => {
    expect(
      profileReducer([], {
        type: types.PROFILE_NAVIGATION,
        payload: 'Following',
      }),
    ).toEqual({ profileView: 'Following' });
  });
  it('should handle UPDATE_PROFILE', () => {
    expect(
      profileReducer([], {
        type: types.UPDATE_PROFILE,
        payload: profileData.profile,
      }),
    ).toEqual({ profile: profileData.profile });
  });
  it('should handle SET_PROFILE_ERROR', () => {
    expect(
      profileReducer([], {
        type: types.SET_PROFILE_ERROR,
        payload: 'an error occoured',
      }),
    ).toEqual({ profileError: 'an error occoured' });
  });
  it('should handle PROFILE_LOADING', () => {
    expect(
      profileReducer([], {
        type: types.PROFILE_LOADING,
        payload: false,
      }),
    ).toEqual({ loading: false });
  });
});
