import {connect} from "react-redux";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../Redux/messagesReducer";
import Messages from "./Messages";


let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps) (Messages)

export default MessagesContainer;




