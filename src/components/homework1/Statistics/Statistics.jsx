import React from 'react';
import PropTypes from 'prop-types';
import StatisticsList from '../StatisticsList/StatisticsList';
import style from './Statistics.module.css';
const Statistics = ({ title, stats }) => (
  <section className={style.container}>
    {title && <h2 className={style.title}>{title}</h2>}
    <StatisticsList statisticsList={stats}></StatisticsList>
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
