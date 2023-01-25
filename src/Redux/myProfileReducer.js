import myPhoto from "./../assets/img/photo_main.jpg"
import postPhoto from "./../assets/img/NAVI_Logo.svg.png";

const ADD_POST = "ADD_POST";

let initialState = {
    myProfile: {
        id: 1,
        fullName: "Roman Delinkevich",
        birthdayTime: "03.02.1999",
        photo: myPhoto,
        city: "Lviv",
        work: "Web Developer",
        onLine: "Online",
        about: "123aksjdhkjahsfkjhkasjhfkjasfk",
        friends: [],
        friendsCount: 0,
        posts: [
            {
                id: 1,
                photo: postPhoto,
                text: "NAVI - THE BEST!",
                likes: 0,
                whoLiked: [],
                postTime: "20.20.20"
            }
        ],


    },
    newMessageBody: ""
};

const myProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            console.log(action);
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