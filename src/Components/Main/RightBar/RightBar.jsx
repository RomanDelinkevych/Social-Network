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
import LoginForm from "../../LoginForm/LoginForm";

const RightBar = () => {
    return (
            <Routes>
                <Route path={"/"} element={<News/>}/>
                <Route path={"signUp/"} element={<LoginForm formType="signUp"/>}/>
                <Route path={"signIn/"} element={<LoginForm formType="signIn"/>}/>
                <Route path="news/" element={<News/>}/>
                <Route path="profile/*" element={<Profile/>}/>
                <Route path="friends/*" element={<Friends/>}/>
                <Route path="dialogs/" element={<Dialogs/>}/>
                <Route path="messages/*" element={<Messages/>}/>
                <Route path="out/" element={<Out/>}/>
                <Route path="/*" element="ERROR_PAGE"/>
            </Routes>
    )
};

export default RightBar;