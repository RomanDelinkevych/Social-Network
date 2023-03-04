import React from "react";
import style from "./Out.module.scss";
import {Navigate, useNavigate} from "react-router-dom";
import app from "./../../../../base";
import {useContext} from "react"
import {AuthContext} from "../../../HellperComponents/Authentication/Authentication";

const Out = () => {
    console.log("out work")
    let navigate = useNavigate();
    const {currentUser} = useContext(AuthContext);
    console.log({currentUser});


    function onClickYes() {
        //clear local storage

    }
    function onClickNo() {
        navigate("/", {replace: true});
    }
    return (
        currentUser === null
            ? <Navigate to="/signIn"/>
            : <div className={style.out}>
            <p>You want sign Out?</p>
            <div>
                <button onClick={() => {
                    const out = app.auth().signOut();
                    console.log(out);
                }}>Yes</button>
                <button onClick={onClickNo}>No</button>
            </div>
        </div>
    )
}

// export default Out;

export default Out;