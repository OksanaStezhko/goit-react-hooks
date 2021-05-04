import React from 'react';
import PropTypes from 'prop-types';
import FriendItem from '../FriendItem/FriendItem';
import style from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={style.list}>
    {friends.map(({ id, ...friendInfo }) => (
      <FriendItem key={id} friendInfo={friendInfo} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
