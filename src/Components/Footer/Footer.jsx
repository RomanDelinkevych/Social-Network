import React from "react";
import "./Footer.module.scss";
import style from "./Footer.module.css"

const gitHubLink = "https://github.com/RomanDelinkevych";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div>
                Info about me
            </div>
            <div>
                Created by
                <a href={gitHubLink}>
                    DELONE
                </a>
            </div>
        </footer>
    )
};

export default Footer;