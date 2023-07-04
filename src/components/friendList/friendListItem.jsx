import PropTypes from 'prop-types';
import css from "./friendList.module.css";

export const Friend = ({avatar, name, isOnline, id}) => {
    return ( 
    <li key={id} className={css.item}>
        <span className={`${css.status} ${isOnline ? css.isOnline : ''}`}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
</li>
    );
};

Friend.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
};