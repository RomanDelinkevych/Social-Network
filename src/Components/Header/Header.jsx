import React from "react";
import style from "./Header.module.scss";
import logoNAVI from "../../assets/img/NAVI_Logo.svg.png"
import {NavLink, useNavigate} from "react-router-dom";
import logoMessages from "./../../assets/img/mail.png"

const messages = "/dialogs";

const Header = () => {
    const navigate = useNavigate();
    return (
            <header className={style.header}>
                <img src={logoNAVI}/>
                <div>
                    <NavLink to={messages}>
                        <img src={logoMessages}/>
                    </NavLink>
                    <div>
                        <div>
                            <button onClick={() => navigate("/signIn")}>Sign In</button>
                        </div>
                        <div>
                            <button onClick={() => navigate("/signUp")}>Sign Up</button>
                        </div>
                    </div>
                </div>

            </header>
    )
};

export default Header;