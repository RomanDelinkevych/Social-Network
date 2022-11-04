import photo from "../assets/img/user_logo.jpg"
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';


let initialState = {
    dialogs: [
        {
            id: 1,
            fullName: "Jon Smith",
            photo: photo,
            messages: [
                {id: 1, who: "You", text: "1 message Jon Smith"},
                {id: 2, who: "Jon Smith", text: "2 message Jon Smith"},
                {id: 3, who: "You", text: "3 message Jon Smith"},
                {id: 4, who: "Jon Smith", text: "4 message Jon Smith"},
            ]
        },
        {
            id: 2,
            fullName: "Alex Master",
            photo: photo,
            messages: [
                {id: 1, who: "You", text: "5 message Alex Master"},
                {id: 2, who: "Alex Master", text: "6 message Alex Master"},
                {id: 3, who: "You", text: "7 message Alex Master"},
                {id: 4, who: "Alex Master", text: "8 message Alex Master"},
            ]
        },
    ],
    newMessageBody: ""
};

const messagesReducer = (state = initialState, action) => {
    let newId = Number(state.dialogs[0].messages.length) + 1;
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            console.log(state.messages);
            let body = state.newMessageBody;
            return {
                ...state.messages,
                messages: [...state.messages, {id: newId, message: body}],
                newMessageBody: ''
            }
        default:
            return state;
    }
}

export const sendMessageCreator = () => {
    console.log("sendMessageCreator");
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (body) => {
    console.log("updateNewMessageBodyCreator");
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export default messagesReducer;