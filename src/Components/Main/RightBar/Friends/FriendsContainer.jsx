import {connect} from "react-redux";
import {toggleFollowUnfollowFriend} from "../../../../Redux/friendsReducer";
import Friends from "./Friends";
import FriendCard from "./FriendCard/FriendCard";


let mapStateToProps = (state) => {
    return {
        friendsPage: state.friendsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        toggleFriend: (friendID) => {
            dispatch(toggleFollowUnfollowFriend(friendID));
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps) (Friends, FriendCard);

export default FriendsContainer;