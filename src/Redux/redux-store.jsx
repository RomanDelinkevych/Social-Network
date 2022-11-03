import {combineReducers, createStore} from "redux";
import messagesReducer from "./messagesReducer";
import friendsReducer from "./friendsReducer";
import MyProfileReducer from "./myProfileReducer";


let reducer = combineReducers({
    messagePage: messagesReducer,
    friendsPage: friendsReducer,
    myProfilePage: MyProfileReducer,
});

let store = createStore(reducer);

export default store;