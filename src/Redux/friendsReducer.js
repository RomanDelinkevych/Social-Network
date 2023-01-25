import img1 from "../assets/img/user_logo.jpg"

const TOGGLE_FOLLOW_UNFOLLOW_FRIEND = 'TOGGLE_FOLLOW_UNFOLLOW_FRIEND';
let initialState = {
    friends: [
        {
            id: 1,
            fullName: "Jon Smith",
            photo: img1,
            followed: true
        },
        {
            id: 2,
            fullName: "Alex Master",
            photo: img1,
            followed: true
        },
    ]
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW_UNFOLLOW_FRIEND:
            let targetID = action.id;
            return {
                ...state.friends
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