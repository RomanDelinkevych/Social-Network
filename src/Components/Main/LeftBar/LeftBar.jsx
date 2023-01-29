import React from "react";
import style from "./LeftBar.module.scss";
import {NavLink} from "react-router-dom";

const LeftBar = () => {
    return (
            <div className={style.leftBar}>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/profile">My Profile</NavLink>
                <NavLink to="/friends">Friends</NavLink>
                <NavLink to="/dialogs">Messages</NavLink>
                <NavLink to="/out">Out</NavLink>
            </div>
    )
};

export default LeftBar;