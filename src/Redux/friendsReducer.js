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