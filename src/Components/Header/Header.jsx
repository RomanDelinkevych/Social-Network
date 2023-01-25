import React from "react";
import style from "./Header.module.scss";
import logoNAVI from "../../assets/img/NAVI_Logo.svg.png"
import {NavLink} from "react-router-dom";
import logoMessages from "./../../assets/img/mail.png"

const messages = "/dialogs";

const Header = () => {
    return (
            <header className={style.header}>
                <img src={logoNAVI}/>
                <div>
                    <NavLink to={messages}>
                        <img src={logoMessages}/>
                    </NavLink>
                    <div>
                        <div>
                            <button>Login</button>
                        </div>
                        <div>
                            <button>Register</button>
                        </div>
                    </div>
                </div>

            </header>
    )
};

export default Header;