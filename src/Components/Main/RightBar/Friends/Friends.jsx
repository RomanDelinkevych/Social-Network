import React from "react";
import FriendCard from "./FriendCard/FriendCard";
import style from "./Friends.module.scss";

const Friends = (props) => {
    let friends = props.friendsPage.friends.map(friend =>
        friend.followed === true ? <FriendCard key={friend.id}
                                               userInfo={friend}
                                               toggleFunc={props.toggleFriend}
        /> : ""
    )

    return (<div className={style.friends}>{friends}</div>)
}
export default Friends;