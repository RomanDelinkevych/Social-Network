import React from "react";
import "./Header.module.css";
import {NavLink} from "react-router-dom";


const newsPath = "/news";
const jobsPath = "/jobs";
const statisticPath = "/statistic";
const askerPath = "/asker";

const Header = () => {
    return (
            <header>
                <NavLink to={newsPath}>News</NavLink>
                <NavLink to={jobsPath}>Jobs</NavLink>
                <NavLink to={statisticPath}>Statistic</NavLink>
                <NavLink to={askerPath}>Asker</NavLink>
            </header>
    )
};

export default Header;