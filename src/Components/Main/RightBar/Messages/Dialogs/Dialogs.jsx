import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.scss"

const Dialogs = (props) => {
    console.log(props);
    let dialogs = props.messagePage.dialogs;
    let allDialogs = dialogs.map(dialog => <DialogItem key={dialog.id} dialogInfo={dialog}/>)
    return (
        <div className={style.dialogs}>
            {allDialogs}
        </div>
    )
}

export default Dialogs;