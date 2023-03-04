import {applyMiddleware, combineReducers, createStore} from "redux";
import messagesReducer from "./messagesReducer";
import friendsReducer from "./friendsReducer";
import MyProfileReducer from "./myProfileReducer";
import thunk from "redux-thunk"
import dataFirebase from "./../API/Firebase/myProfileSlice"
import {firebaseMyProfile} from "../API/Firebase/myProfileSlice";


let reducer = combineReducers({
    messagePage: messagesReducer,
    friendsPage: friendsReducer,
    myProfilePage: MyProfileReducer,
    dataFirebase: dataFirebase
});

let store = createStore(reducer, applyMiddleware(thunk));

export default store;