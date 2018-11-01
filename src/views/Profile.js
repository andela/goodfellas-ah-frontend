import React from 'react';
import { Link } from 'react-router-dom';
import Body from '../components/layout/Body';
import '../styles/views/profile.scss';
import profileImage from '../assets/user.jpg';

export default () => (
  <Body className="profile">
    <div>
      <header>
        <img alt="profile" className="profile-image" src={profileImage} />
        <h3 id="user-name">Fatima Akande</h3>
        <Link className="button outline" to="/profile/edit">Edit Profile</Link>
      </header>
    </div>
  </Body>
);
