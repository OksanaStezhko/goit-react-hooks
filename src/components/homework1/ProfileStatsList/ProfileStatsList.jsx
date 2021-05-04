import React from 'react';
import PropTypes from 'prop-types';
import ProfileStatsItem from '../ProfileStatsItem/ProfileStatsItem';
import style from './ProfileStatsList.module.css';

const ProfileStatsList = ({ stats }) => (
  <ul className={style.stats}>
    {Object.entries(stats).map(([key, value]) => (
      <ProfileStatsItem key={key} label={key} quantity={value} />
    ))}
  </ul>
);

ProfileStatsList.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default ProfileStatsList;
