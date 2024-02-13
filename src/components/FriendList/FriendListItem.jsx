import React from 'react';
import clsx from 'clsx';
import css from './Friend.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    const statusClasses = clsx(css.status, {
        [css.online]: isOnline,
        [css.offline]: !isOnline,
    });

    return (
        <div>
            <img className={css.image} src={avatar} alt="Avatar" width="48" />
            <p className={css.paragraph}>{name}</p>
            <p className={statusClasses}>
                {isOnline ? 'Online' : 'Offline'}
            </p>
        </div>
    );
};

export default FriendListItem;
