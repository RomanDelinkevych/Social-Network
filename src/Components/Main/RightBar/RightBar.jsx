import React from "react";
import "./RightBar.module.css";
import News from "./News/News";
import {Routes, Route} from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";
import MyProfileContainer from "./myProfile/MyProfileContainer";
import DialogsContainer from "./Messages/Dialogs/DialogsContainer";

const newsPath = "news/";
const myProfile = "MyProfile/";
const friends = "friends/";
const messages = "messages/*";
const dialogs = "dialogs/";
const out = "out/";

const RightBar = () => {
    return (
            <Routes>
                <Route path={"/"} element={<News/>}/>
                <Route path={newsPath} element={<News/>}/>
                <Route path={myProfile} element={<MyProfileContainer/>}/>
                <Route path={friends} element={<FriendsContainer/>}/>
                <Route path={dialogs} element={<DialogsContainer/>}/>
                <Route path={out} element={"123"}/>
            </Routes>
    )
};

export default RightBar;