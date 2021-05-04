import React from 'react';
import PropTypes from 'prop-types';
import style from './StatisticsItem.module.css';

const StatisticsItem = ({ itemName, itemValue }) => (
  <li className={style.item}>
    <span>{itemName}:</span>
    <span>
      {itemValue}
      {itemName === 'positive feedback' ? '%' : ''}
    </span>
  </li>
);

StatisticsItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  itemValue: PropTypes.number.isRequired,
};

export default StatisticsItem;
