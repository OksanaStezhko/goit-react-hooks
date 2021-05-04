import React from 'react';
import PropTypes from 'prop-types';
import Transation from '../Transaction/Transaction';
import style from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={style.table}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, ...transactionInfo }) => (
        <Transation key={id} transactionInfo={transactionInfo} />
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
