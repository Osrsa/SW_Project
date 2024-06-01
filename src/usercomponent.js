import React from 'react';
import './usercomponent.css';
import profile from './profile_default.jpg';

function UserComponent({ profileImage, username }) {
  return (
    <div className='userlist-container'>
      <img src={profile} className='profile-image' alt='profile' />
      <p>{username}</p>
    </div>
  );
}

export default UserComponent;
