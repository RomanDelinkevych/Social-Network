import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import style from './FriendsCard.module.scss';

const FriendCard = (props) => {
    const navigate = useNavigate();
    const roadToNavigate = "/messages/" + props.userInfo.fullName.toString().replaceAll(/ /g, "");

    return (
        <div id="FriendCard" className={style.card}>
            <img src={props.userInfo.photo}/>
            <NavLink to={"/" + props.userInfo.fullName}>{props.userInfo.fullName}</NavLink>
            <div>
                <button
                    onClick ={() => navigate(roadToNavigate)}
                >Message</button>
                <button>Unfollow</button>
            </div>
        </div>
    )
}

export default FriendCard;