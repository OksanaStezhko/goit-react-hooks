import React from 'react';
import PropTypes from 'prop-types';
import style from './Transaction.module.css';

const Transaction = ({ transactionInfo: { type, amount, currency } }) => (
  <tr className={style.table_tr}>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);

Transaction.prototype = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
export default Transaction;
