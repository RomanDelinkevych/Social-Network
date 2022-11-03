import React from "react";
import {NavLink} from "react-router-dom";
import style from './FriendsCard.module.scss';

const FriendCard = (props) => {
    return (
        <div id="FriendCard" className={style.card}>
            <img src={props.userInfo.photo}/>
            <NavLink to={"/" + props.userInfo.fullName}>{props.userInfo.fullName}</NavLink>
            <div>
                <button>Message</button>
                <button>Unfollow</button>
            </div>
        </div>
    )
}

export default FriendCard;