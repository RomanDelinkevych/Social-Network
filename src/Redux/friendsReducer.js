import img1 from "../assets/img/user_logo.jpg"
import postPhoto from "../assets/img/NAVI_Logo.svg.png";

const TOGGLE_FOLLOW_UNFOLLOW_FRIEND = 'TOGGLE_FOLLOW_UNFOLLOW_FRIEND';
let initialState = {
    friends: [
        {
            id: 1,
            followed: true,
            fullName: "Jon Smith",
            webPath: "JonSmith",
            birthdayTime: "03.02.1999",
            photo: img1,
            city: "Lviv",
            work: "Web Developer",
            onLine: "Online",
            about: "Hi, my name is Jon Smith. I do a cookies!!!",
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
        {
            id: 2,
            followed: true,
            fullName: "Alex Master",
            webPath: "AlexMaster",
            birthdayTime: "03.02.1999",
            photo: img1,
            city: "Lviv",
            work: "Web Developer",
            onLine: "Online",
            about: "Hi, my name is Jon Smith. I do a cookies!!!",
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
    ]
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW_UNFOLLOW_FRIEND:
            let friendsArr = [...state.friends];
            friendsArr.forEach(friend => {
                    if (friend.id === action.id) {
                        if (friend.followed === true) {
                            friend.followed = false;
                        } else if (friend.followed === false) {
                            friend.followed = true
                        }
                    }
                    console.log(friend)
                })


            return {
                ...state,
                friends: [...friendsArr]
            }
        default: return {...state}
    }
}

export const toggleFollowUnfollowFriend = (friendID) => {
    // console.log("toggleFollowUnfollowFriend", friendID);
    return {
        type: TOGGLE_FOLLOW_UNFOLLOW_FRIEND,
        id: friendID
    }
}


export default friendsReducer;