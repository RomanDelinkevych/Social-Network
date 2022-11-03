import React from "react";
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./Dialogs/DialogItem/DialogItem";
import "./Messages.module.css";

const Messages = (props) => {

    let state = props.messagePage;
    let dialogsElement = props.messagePage.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.fullName} id={dialog.id}/>);
    console.log(props.messagePage.dialogs);
    let messageElement = props.messagePage.dialogs.map(dialog => dialog.messages.map(message => <MessageItem key={message.id} message={message.text}/>) );
    let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;

        props.updateNewMessageBody(body);
    }

    return (
        <div>
            <div>
                {dialogsElement}
            </div>
            <div>
                <div>
                    {messageElement}
                </div>
                <div>
                <textarea
                    value={newMessageBody}
                    onChange={onNewMessageChange}
                    placeholder='send message'
                ></textarea>
                </div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
        </div>
    )

}

export default Messages;