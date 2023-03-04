import myPhoto from "./../assets/img/photo_main.jpg"
import postPhoto from "./../assets/img/NAVI_Logo.svg.png";
import firebase from "firebase";
import photo from "../assets/img/user_logo.jpg";
import {getUserDataAlways, getUserDataOnce, setUserData} from "../API/Firebase/FirebaseHelper";
import {getLocalStorageUid} from "../LocalStorage/LocalStorage";

const ADD_POST = "ADD_POST";
const INIT_FIREBASE_DATA = 'INIT_FIREBASE_DATA';

let initialState = {
    myProfile:
        {
            id: 1,
            fullName: "Roman Delinkevich",
            webPath: "RomanDelinkevich",
            birthdayTime: "03.02.1999",
            photo: myPhoto,
            city: "Lviv",
            work: "Web Developer",
            onLine: "Online",
            about: "Hi, my name is Roman. I am studying at engineer group that specializing in welding. I also have master dagre in this university, and confirm my diploma work on english. I work as an wedding installer and a driver in Lviv. \n" +
                "I am twenty three years old, but i looking myself for now. Before war i try earn money in crypto, i try start my website - that will be unique in our country, but now i looking for a job in IT-industry, like front-end website developer.",
            friends: [],
            posts: [
                {
                    id: 1,
                    whoAddPost: "Roman Delinkevich",
                    photo: postPhoto,
                    text: "NAVI - THE BEST!",
                    whoLiked: [],
                    postTime: "20.20.20"
                }
            ],
        },
    isLoaded: true,
    newMessageBody: ""
};

const myProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_FIREBASE_DATA:
            return {
                ...state,
                myProfile: {...action.data},
                isLoaded: true,
            }
        case ADD_POST:
            return {
                myProfile: {
                    ...state.myProfile,
                    posts: [
                        {
                            id: state.myProfile.posts.length + 1,
                            photo: action.image,
                            text: action.text,
                            likes: 0,
                            whoLiked: [],
                            postTime: action.time
                        },
                        ...state.myProfile.posts,
                    ]
                }
            }


        default:
            return state;
    }
}

export const initMyProfileActionCreator = (data) => {
    return {
        type: INIT_FIREBASE_DATA,
        data
    }
}

export const postActionCreator = (text, image, time) => {
    if (image !== null) {
        image = URL.createObjectURL(image);
    }

    return {
        type: ADD_POST,
        text: text,
        image: image,
        time: time
    }
}

export default myProfileReducer;