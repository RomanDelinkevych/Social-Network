import React from "react";
import "./RightBar.module.css";

//Components
import {Routes, Route} from "react-router-dom";
import Profile from "./Profile/Profile";
import Friends from "./Friends/Friends";
import Dialogs from "./Messages/Dialogs/Dialogs";
import Messages from "./Messages/Messages";
import News from "./News/News";
import Out from "./Out/Out";

const RightBar = () => {
    return (
            <Routes>
                <Route path={"/"} element={<News/>}/>
                <Route path="news/" element={<News/>}/>
                <Route path="profile/*" element={<Profile/>}/>
                <Route path="friends/*" element={<Friends/>}/>
                <Route path="dialogs/" element={<Dialogs/>}/>
                <Route path="messages/*" element={<Messages/>}/>
                <Route path="out/" element={<Out/>}/>
            </Routes>
    )
};

export default RightBar;