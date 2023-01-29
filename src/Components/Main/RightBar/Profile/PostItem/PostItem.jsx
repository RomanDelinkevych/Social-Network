import React from "react";
import style from "./PostItem.module.scss";

const PostItem = (props) => {
    console.log(props);
    return (
        <div className={style.postItem}>
            <img src={props.postInfo.photo}/>
            <p>{props.postInfo.text}</p>
            <div>
                <button>Likes: {props.postInfo.whoLiked.length}</button>
                <p>Posted: {props.postInfo.postTime}</p>
            </div>
        </div>
    )
}


export default PostItem;