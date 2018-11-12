import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import profileReducer from '../../reducers/profileReducer';
import * as types from '../../actions/actionTypes';
import { Profile } from '../../containers/Profile';
import initialState from '../../reducers/initialState';
import * as profileData from '../mock/profileData';
import * as profileActions from '../../actions/profileActions';
import API from '../mock/API';

const middlewares = [thunk.withExtraArgument(API)];
const mockStore = configureMockStore(middlewares);
let profile;
describe('components', () => {
  beforeEach(() => {
    mockStore({ profile: initialState.profile });
    profile = profileReducer([], {
      type: types.SET_PROFILE,
      payload: profileData.setProfile,
    });
  });
  describe('Loading component', () => {
    const setup = () => {
      const props = {
        value: 'Ade',
        fetchProfile: profileActions.fetchProfile,
        profileStore: profile,
        user: { userId: 1 },
        profileNavigation: jest.fn(),
        match: {
          params: { userId: 1 },
        },
      };

      const enzymeWrapper = shallow(<Profile {...props} />);

      return {
        props,
        enzymeWrapper,
      };
    };
    it('should render as expected', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});
