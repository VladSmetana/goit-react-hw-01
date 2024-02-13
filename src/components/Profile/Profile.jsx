import React from 'react';
import css from './Profile.module.css';
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.aboutUser}>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.username}>{name}</p>
        <p className={css.paragraph}>@{tag}</p>
        <p className={css.paragraph}>{location}</p>
      </div>

      <ul className={css.userStats}>
        <li className={css.userStatsList}>
          <span className={css.stats}>Followers</span>
          <span className={css.statsCount}>{stats.followers}</span>
        </li>
        <li className={css.userStatsList}>
          <span className={css.stats}>Views</span>
          <span className={css.statsCount}>{stats.views}</span>
        </li>
        <li className={css.userStatsList}>
          <span className={css.stats}>Likes</span>
          <span className={css.statsCount}>{stats.likes}</span>
        </li >
      </ul>
    </div>
  );
};
export default Profile;
