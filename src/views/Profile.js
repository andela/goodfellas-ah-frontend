import React from 'react';
import { Link } from 'react-router-dom';
import Body from '../components/layout/Body';
import ProfileToolbar from '../components/shared/ProfileToolbar';
import FollowCard from '../components/shared/FollowCard';
import profileImage from '../assets/user.jpg';

export default () => (
  <Body className="profile">
    <div>
      <header>
        <img alt="profile" className="profile-image" src={profileImage} />
        <h3 id="user-name">Fatima Akande</h3>
        <Link className="button outline" to="/profile/edit">Edit Profile</Link>
      </header>
      <ProfileToolbar />
      <FollowCard />
      <FollowCard />
      <FollowCard />
      <FollowCard />
    </div>
  </Body>
);
