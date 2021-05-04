import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../../defaultAvatar.svg';
import style from './FriendItem.module.css';

const FriendItem = ({ friendInfo: { avatar, name, isOnline } }) => (
  <li className={style.item}>
    <span className={isOnline ? style.isOnline : style.isOffline}>
      {isOnline}
    </span>
    <img className={style.avatar} src={avatar} alt="Аватар" width="48" />
    <p className={style.name}>{name}</p>
  </li>
);

FriendItem.defaultProps = {
  avatar: defaultAvatar,
};

FriendItem.prototype = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendItem;
