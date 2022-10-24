import React from "react";
import "./RightBar.module.css";
import News from "./News/News";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Jobs from "./Jobs/Jobs";
import Statistic from "./Statistic/Statistic";
import Asker from "./Asker/Asker";
import MyProfile from "./myProfile/MyProfile";
import Friends from "./Friends/Friends";
import Messages from "./Messages/Messages";
import UserStatistic from "./UserStatistic/UserStatistic";
import Setting from "./Setting/Setting";

const newsPath = "news/";
const jobsPath = "jobs/";
const statisticPath = "statistic/";
const askerPath = "asker/";
const myProfile = "MyProfile/";
const friends = "friends/";
const messages = "messages/";
const userStatistic = "userStatistic/";
const setting = "setting/";
const out = "out/";

const RightBar = () => {
    return (
            <Routes>
                <Route path={"/"} element={<News/>}/>
                <Route path={newsPath} element={<News/>}/>
                <Route path={jobsPath} element={<Jobs/>}/>
                <Route path={statisticPath} element={<Statistic/>}/>
                <Route path={askerPath} element={<Asker/>}/>
                <Route path={myProfile} element={<MyProfile/>}/>
                <Route path={friends} element={<Friends/>}/>
                <Route path={messages} element={<Messages/>}/>
                <Route path={userStatistic} element={<UserStatistic/>}/>
                <Route path={setting} element={<Setting/>}/>
                <Route path={out} element={"123"}/>
            </Routes>
    )
};

export default RightBar;