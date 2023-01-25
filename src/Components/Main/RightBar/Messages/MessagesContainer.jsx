import {connect} from "react-redux";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../Redux/messagesReducer";
import Messages from "./Messages";


let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage,
        clientPhoto: state.myProfilePage.myProfile.photo
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: (arrayCount) => {
            dispatch(sendMessageCreator(arrayCount))
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps) (Messages)

export default MessagesContainer;




