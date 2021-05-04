import React from 'react';
import PropTypes from 'prop-types';
import style from './ProfileDescription.module.css';
import defaultAvatar from '../../defaultAvatar.svg';

const Description = ({ avatar, name, tag, location }) => (
  <div className={style.description}>
    <img className={style.avatar} src={avatar} alt="Аватар пользователя" />
    <p className={style.name}>{name}</p>
    <p className={style.tag}>@{tag}</p>
    <p className={style.location}>{location}</p>
  </div>
);

Description.defaultProps = {
  avatar: defaultAvatar,
};

Description.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Description;
