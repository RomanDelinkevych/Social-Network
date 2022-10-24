import React from "react";
import "./Footer.module.css";

const gitHubLink = "https://github.com/RomanDelinkevych";

const Footer = () => {
    return (
        <footer>
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