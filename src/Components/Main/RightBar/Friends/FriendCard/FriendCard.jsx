import React from "react";
import style from './FriendsCard.module.scss';
//Hooks
import {useNavigate} from "react-router-dom";


const FriendCard = (props) => {
    const navigate = useNavigate();
    // const roadToNavigateMessage = "/messages/" + props.userInfo.fullName.toString().replaceAll(/ /g, "");

    function onClickButton(e, target) {
        e.stopPropagation();
        if (target === "MESSAGE") {
            navigate("/messages" + props.userInfo.webPath);
        } else if (target === "UNFOLLOW") {
            props.toggleFunc(props.userInfo.id);
        }
    }

    return (
        <div onClick={() => {navigate('/profile' + props.userInfo.webPath, {replace: true})}} className={style.card}>
            <img src={props.userInfo.photo} alt={props.userInfo.photo}/>
            <p>{props.userInfo.fullName}</p>
            <div>
                <button onClick={(e) => onClickButton(e, "MESSAGE")}>
                    Message
                </button>
                <button onClick={(e) => {onClickButton(e, "UNFOLLOW")}}>
                    Unfollow
                </button>
            </div>
        </div>
    )
}

export default FriendCard;