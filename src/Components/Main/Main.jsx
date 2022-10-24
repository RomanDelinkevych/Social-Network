import React from "react";
import "./Main.module.css";

import LeftBar from "./LeftBar/LeftBar";
import RightBar from "./RightBar/RightBar";


const Main = () => {
    return (
            <main>
                <LeftBar/>
                <RightBar/>
            </main>
    )
};

export default Main;