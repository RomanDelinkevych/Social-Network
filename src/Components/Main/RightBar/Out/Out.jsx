import React from "react";
import style from "./Out.module.scss";

const Out = () => {
    return (
        <div className={style.out}>
            <p>You want sign Out?</p>
            <button>Yes</button>
            <button>No</button>
        </div>
    )
}

export default Out;