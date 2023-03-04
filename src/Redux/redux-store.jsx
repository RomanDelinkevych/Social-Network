import {applyMiddleware, combineReducers, createStore} from "redux";
import messagesReducer from "./messagesReducer";
import friendsReducer from "./friendsReducer";
import MyProfileReducer from "./myProfileReducer";
import thunk from "redux-thunk"


let reducer = combineReducers({
    messagePage: messagesReducer,
    friendsPage: friendsReducer,
    myProfilePage: MyProfileReducer
});

let store = createStore(reducer, applyMiddleware(thunk));

export default store;