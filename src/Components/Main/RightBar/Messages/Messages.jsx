import React from "react";
import MessageItem from "./MessageItem/MessageItem";
import style from "./Messages.module.scss";
import {useLocation} from "react-router-dom";


const Messages = (props) => {
    let location = useLocation();
    let locationPath = location.pathname.replace("/messages/", "");
    let dialog;
    props.messagePage.dialogs.forEach(dialogSearch => {
        if (dialogSearch.path === locationPath) {
            dialog = dialogSearch;
        }
    })
    let arrayCount = Number(dialog.id) - 1;
    let otherPersonPhoto = props.messagePage.dialogs[arrayCount].photo;
    let clientPhoto = props.clientPhoto;
    let messageElement = props.messagePage.dialogs[arrayCount].messages.map(message =>
        <MessageItem
            key={message.id}
            message={message}
            photo={message.who === "You" ? clientPhoto : otherPersonPhoto}
        />);
    let newMessageBody = props.messagePage.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage(arrayCount);
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={style.messages}>
            <div>
                {messageElement}
            </div>
            <div>
                <textarea
                    value={newMessageBody}
                    onChange={onNewMessageChange}
                    placeholder='Write message ...'
                ></textarea>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    )

}

export default Messages;