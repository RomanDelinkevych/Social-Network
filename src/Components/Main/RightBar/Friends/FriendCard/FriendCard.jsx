import React from "react";
import {useNavigate} from "react-router-dom";
import style from './FriendsCard.module.scss';

const FriendCard = (props) => {
    console.log(props);
    const navigate = useNavigate();
    const roadToNavigate = "/messages/" + props.userInfo.fullName.toString().replaceAll(/ /g, "");
    let roadToNavigateProfile = '/profile/' + props.userInfo.fullName.toString().replaceAll(/ /g, "");

    return (
        <div onClick={() => {
            navigate(roadToNavigateProfile, {replace: true})
        }} className={style.card}>
            <img src={props.userInfo.photo}/>
            <p>{props.userInfo.fullName}</p>
            <div>
                <button onClick={(e) => {
                    e.stopPropagation();
                    navigate(roadToNavigate);
                }}
                >
                    Message
                </button>
                <button onClick={(e) => {
                    e.stopPropagation();
                    props.toggleFunc(props.userInfo.id);
                }}>
                    {props.userInfo.followed === true ? "Unfollow" : "Follow"}
                </button>
            </div>
        </div>
    )
}

export default FriendCard;