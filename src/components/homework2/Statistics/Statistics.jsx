import React from 'react';
import PropTypes from 'prop-types';
import StatisticsItem from '../StatisticsItem';

const Statistics = ({ itemList }) => (
  <ul>
    {itemList.map(([key, value]) => (
      <StatisticsItem key={key} itemName={key} itemValue={value} />
    ))}
  </ul>
);

Statistics.propTypes = {
  itemList: PropTypes.array.isRequired,
};

export default Statistics;
