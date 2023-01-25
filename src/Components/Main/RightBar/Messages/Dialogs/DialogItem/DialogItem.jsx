import React from "react";
import {NavLink} from "react-router-dom";
import style from "./DialogsItem.module.scss"

const DialogItem = (props) => {
    const roadToNavigate = "/messages/" + props.dialogInfo.fullName.toString().replaceAll(/ /g, "");

    return (
            <NavLink className={style.dialogsItem} to={roadToNavigate}>
                <img src={props.dialogInfo.photo}/>
                <p>{props.dialogInfo.fullName}</p>
                <p>{props.dialogInfo.messages[3].text}</p>
            </NavLink>
    )
}

export default DialogItem;