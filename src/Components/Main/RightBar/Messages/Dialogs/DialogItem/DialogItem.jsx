import React from "react";
import {NavLink} from "react-router-dom";
import style from "./DialogsItem.module.scss"

const DialogItem = (props) => {
    console.log(props);
    let path = '/messages/' + props.dialogInfo.id;
    return (
            <NavLink className={style.dialogsItem} to={path}>
                <img src={props.dialogInfo.photo}/>
                <p>{props.dialogInfo.fullName}</p>
                <p>{props.dialogInfo.messages[3].text}</p>
            </NavLink>
    )
}

export default DialogItem;