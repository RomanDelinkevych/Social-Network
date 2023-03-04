import photo from "../assets/img/user_logo.jpg"
import {setUserData} from "../API/Firebase/FirebaseHelper";
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';


let initialState = {
    dialogs: [
        {
            id: 1,
            fullName: "Jon Smith",
            path: "JonSmith",
            photo: photo,
            messages: [
                {id: 1, who: "You", text: "1 message Jon Smith", date: "20.20.1999", time: "20:16:11"},
                {id: 2, who: "Jon Smith", text: "2 message Jon Smith", date: "20.20.1999", time: "20:16:11"},
                {id: 3, who: "You", text: "3 message Jon Smith", date: "20.20.1999", time: "20:16:11"},
                {id: 4, who: "Jon Smith", text: "4 message Jon Smith", date: "20.20.1999", time: "20:16:11"},
            ]
        },
        {
            id: 2,
            fullName: "Alex Master",
            path: "AlexMaster",
            photo: photo,
            messages: [
                {id: 1, who: "You", text: "5 message Alex Master", date: "20.20.1999", time: "20:16:11"},
                {id: 2, who: "Alex Master", text: "6 message Alex Master", date: "20.20.1999", time: "20:16:11"},
                {id: 3, who: "You", text: "7 message Alex Master", date: "20.20.1999", time: "20:16:11"},
                {id: 4, who: "Alex Master", text: "8 message Alex Master", date: "20.20.1999", time: "20:16:11"},
            ]
        },
    ],
    newMessageBody: ""
};

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            if (state.newMessageBody.length !== 0) {
                let newId = Number(state.dialogs[action.arrayCount].messages.length) + 1;
                let body = state.newMessageBody;
                let newArrayMessages = [...state.dialogs];
                let dateNow = new Date().toLocaleDateString();
                let timeNow = new Date().toLocaleTimeString();
                newArrayMessages[action.arrayCount].messages =
                    [...newArrayMessages[action.arrayCount].messages,
                        {
                            id: newId,
                            who: "You",
                            text: body,
                            date: dateNow,
                            time: timeNow
                        }
                    ]

                return {
                    ...state,
                    dialogs: newArrayMessages,
                    newMessageBody: ""
                }
            }
            else {
                return state;
            }

        default:
            return state;
    }
}

export const sendMessageCreator = (arrayCount) => {
    return {
        type: SEND_MESSAGE,
        arrayCount: arrayCount
    }
}
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export default messagesReducer;