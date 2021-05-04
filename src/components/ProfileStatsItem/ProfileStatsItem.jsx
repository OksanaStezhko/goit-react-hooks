import React from 'react';
import PropTypes from 'prop-types';
import style from './ProfileStatsItem.module.css';

const ProfileStatsItem = ({ label, quantity }) => (
  <li className={style.item}>
    <span className={style.label}>{label}</span>
    <span className={style.quantity}>{quantity}</span>
  </li>
);

ProfileStatsItem.defaultProps = {
  quantity: 0,
};

ProfileStatsItem.prototype = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number,
};

export default ProfileStatsItem;
