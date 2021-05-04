import React from 'react';
import PropTypes from 'prop-types';
import ProfileDescription from '../ProfileDescription/ProfileDescription';
import ProfileStatsList from '../ProfileStatsList/ProfileStatsList';
import style from './Profile.module.css';

const Profile = ({ user: { avatar, name, tag, location, stats } }) => (
  <div className={style.container}>
    <ProfileDescription
      avatar={avatar}
      name={name}
      tag={tag}
      location={location}
    />
    <ProfileStatsList stats={stats} />
  </div>
);

Profile.propTypes = {
  user: PropTypes.object,
};

export default Profile;
