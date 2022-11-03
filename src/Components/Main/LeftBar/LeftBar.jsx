import React from "react";
import style from "./LeftBar.module.scss";
import {NavLink} from "react-router-dom";

const myProfile = "/MyProfile";
const friends = "/friends";
const dialogs = "/dialogs";
const out = "/out";
const newsPath = "/news";

const LeftBar = () => {
    return (
            <div className={style.leftBar}>
                <NavLink to={newsPath}>News</NavLink>
                <NavLink to={myProfile}>My Profile</NavLink>
                <NavLink to={friends}>Friends</NavLink>
                <NavLink to={dialogs}>Messages</NavLink>
                <NavLink to={out}>Out</NavLink>
            </div>
    )
};

export default LeftBar;