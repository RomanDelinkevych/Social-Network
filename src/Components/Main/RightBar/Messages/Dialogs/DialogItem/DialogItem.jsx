import React from "react";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    console.log(props);
    let path = '/messages/' + props.dialogInfo.id;
    return (
            <NavLink to={path}>
                <img src={props.dialogInfo.photo}/>
                <p>{props.dialogInfo.fullName}</p>
            </NavLink>
    )
}

export default DialogItem;