import React from 'react';
import PropTypes from 'prop-types';
import FeedbackOptionsItem from '../FeedbackOptionsItem';

const FeedbackOptions = ({ options, onClickButton }) => (
  <ul>
    {options.map(option => (
      <FeedbackOptionsItem
        key={option}
        buttonName={option}
        onClickButton={() => {
          onClickButton(option);
        }}
      />
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  option: PropTypes.arrayOf(
    PropTypes.shape({ option: PropTypes.string.isRequired }),
  ),
  onClickButton: PropTypes.func.isRequired,
};

export default FeedbackOptions;
