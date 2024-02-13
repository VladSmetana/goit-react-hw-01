import React from 'react';
import FriendListItem from './FriendListItem';
import css from './Friend.module.css'

const FriendList = ({ friends }) => {
  return (
    <ul className={css.container}>
      {friends.map((friend) => (
        <li className={css.card} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
