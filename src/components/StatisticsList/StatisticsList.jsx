import React from 'react';
import PropTypes from 'prop-types';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './StatisticsList.module.css';

const StatisticsList = ({ statisticsList }) => (
  <ul className={style.list}>
    {statisticsList.map(({ id, label, percentage }) => (
      <StatisticsItem key={id} label={label} percentage={percentage} />
    ))}
  </ul>
);

StatisticsList.propTypes = {
  statisticsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default StatisticsList;
