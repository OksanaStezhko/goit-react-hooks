import React from 'react';
import PropTypes from 'prop-types';
import style from './StatisticsItem.module.css';

const r = () => Math.floor(Math.random() * 256);
const randomColor = () => 'rgba(' + r() + ',' + r() + ',' + r() + ', 0.6)';

const StatisticsItem = ({ label, percentage }) => (
  <li className={style.item} style={{ backgroundColor: randomColor() }}>
    <span className={style.label}>{label}</span>
    <span className={style.percentage}>{percentage}%</span>
  </li>
);

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default StatisticsItem;
