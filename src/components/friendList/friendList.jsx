import css from "./friendList.module.css";
import { Friend } from './friendListItem';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendlist}>
            {friends.map(friend => 
            <Friend
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            />
                )}
        </ul>
    );
};

