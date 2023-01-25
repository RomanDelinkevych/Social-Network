import React from "react";
import style from "./MessageItem.module.scss";

const MessageItem = (props) => {
    let info = props.message;

    return (
        <div className={info.who === "You" ? style.messageItem + " " + style.left : style.messageItem + " " + style.right}>
            <div>
                <img src={props.photo}/>
            </div>
            <p>{info.text}</p>
            <div>
                <p>{info.date}</p>
                <p>{info.time}</p>
            </div>

        </div>
        )
}

export default MessageItem;