import React from "react";
import "./LeftBar.module.css";
import {NavLink} from "react-router-dom";

const myProfile = "/MyProfile";
const friends = "/friends";
const messages = "/messages";
const statistic = "/userStatistic";
const setting = "/setting";
const out = "/out";

const LeftBar = () => {
    return (
            <div>
                <NavLink to={myProfile}>My Profile</NavLink>
                <NavLink to={friends}>Friends</NavLink>
                <NavLink to={messages}>Messages</NavLink>
                <NavLink to={statistic}>Statistic</NavLink>
                <NavLink to={setting}>Setting</NavLink>
                <NavLink to={out}>Out</NavLink>
            </div>
    )
};

export default LeftBar;