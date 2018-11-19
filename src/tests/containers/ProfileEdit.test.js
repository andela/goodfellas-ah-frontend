import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import profileReducer from '../../reducers/profileReducer';
import * as types from '../../actions/actionTypes';
import { EditProfile } from '../../containers/ProfileEdit';
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
  describe('ProfileEdit container Error', () => {
    const setup = () => {
      const props = {
        value: 'Ade',
        fetchProfile: profileActions.fetchProfile,
        editProfile: profileActions.editProfile,
        profileStore: { profile: {}, profileError: 'An error occoured', profileView: 'Favorites' },
        auth: { userId: 1 },
        profileNavigation: jest.fn(),
      };

      const enzymeWrapper = shallow(<EditProfile {...props} />);

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
  describe('ProfileEdit container Loading', () => {
    const setup = () => {
      const props = {
        value: 'Ade',
        fetchProfile: profileActions.fetchProfile,
        editProfile: profileActions.editProfile,
        profileStore: { profile: {}, profileView: 'Favorites' },
        auth: { userId: 1 },
        profileNavigation: jest.fn(),
      };

      const enzymeWrapper = shallow(<EditProfile {...props} />);

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
  describe('ProfileEdit container', () => {
    const setup = () => {
      const props = {
        value: 'Ade',
        fetchProfile: profileActions.fetchProfile,
        editProfile: profileActions.editProfile,
        profileStore: profile,
        auth: { userId: 1 },
        profileNavigation: jest.fn(),
        history: { push: jest.fn() },
      };

      const enzymeWrapper = shallow(<EditProfile {...props} />);

      return {
        props,
        enzymeWrapper,
      };
    };
    it('should render as expected', () => {
      const { enzymeWrapper } = setup();
      enzymeWrapper.find('[type="submit"]').simulate('click');
      expect(enzymeWrapper).toMatchSnapshot();
    });
    it('should navigate to profilePage when resetButton gets clicked', () => {
      const { enzymeWrapper, props } = setup();
      enzymeWrapper.find('[type="button"]').simulate('click', { preventDefault: jest.fn() });

      expect(props.history.push).toBeCalledWith('/user/profile');
    });
  });
});
