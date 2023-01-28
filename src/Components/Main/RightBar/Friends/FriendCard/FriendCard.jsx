import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import style from './FriendsCard.module.scss';

const FriendCard = (props) => {
    const navigate = useNavigate();
    const roadToNavigate = "/messages/" + props.userInfo.fullName.toString().replaceAll(/ /g, "");

    return (
        <NavLink to={"profile/" + props.userInfo.fullName.toString().replaceAll(/ /g, "")} className={style.card}>
                <img src={props.userInfo.photo}/>
                <NavLink to={"/" + props.userInfo.fullName}>{props.userInfo.fullName}</NavLink>
                <div>
                    <button onClick ={(e) => {
                        e.preventDefault();
                        navigate(roadToNavigate);
                    }
                    }
                    >Message</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        props.toggleFunc(props.userInfo.id);
                    }}>{props.userInfo.followed === true ? "Unfollow" : "Follow"}</button>
                </div>
        </NavLink>
    )
}

export default FriendCard;