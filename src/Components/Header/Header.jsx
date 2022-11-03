import React from "react";
import style from "./Header.module.scss";
import logoNAVI from "../../assets/img/NAVI_Logo.svg.png"
import {NavLink} from "react-router-dom";
import logoMessages from "./../../assets/img/mail.png"

const messages = "/messages";

const Header = () => {
    return (
            <header className={style.header}>
                <img src={logoNAVI}/>
                <div>
                    <NavLink to={messages}>
                        <img src={logoMessages}/>
                    </NavLink>
                    <button>Login</button>
                    <button>Register</button>
                </div>

            </header>
    )
};

export default Header;