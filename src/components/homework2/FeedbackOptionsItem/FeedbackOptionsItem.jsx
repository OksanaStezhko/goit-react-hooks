import React from 'react';
import PropTypes from 'prop-types';
import style from './FeedbackOptionsItem.module.css';

const FeedbackOptionsItem = ({ buttonName, onClickButton }) => (
  <li className={style.item}>
    <button type="button" className={style.button} onClick={onClickButton}>
      {buttonName}
    </button>
  </li>
);

FeedbackOptionsItem.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onClickButton: PropTypes.func.isRequired,
};

export default FeedbackOptionsItem;
