import React from "react";
import style from "./Friends.module.scss";
//Redux
import {toggleFollowUnfollowFriend} from "../../../../Redux/friendsReducer";
import {compose} from "redux";
import {connect} from "react-redux";
//Components
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

const Friends = (props) => {
    let friends = props.friendsPage.friends.map(friend =>
        friend.followed === true ? <FriendCard key={friend.id}
                                               userInfo={friend}
                                               toggleFunc={props.toggleFriend}
        /> : null
    )

    return (<div className={style.friends}>{friends}</div>)
}
export default compose(connect(mapStateToProps, mapDispatchToProps)) (Friends);