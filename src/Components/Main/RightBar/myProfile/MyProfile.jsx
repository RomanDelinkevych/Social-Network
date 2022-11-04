import React from "react";
import PostItem from "./PostItem/PostItem";
import style from "./MyProfile.module.scss"

const MyProfile = (props) => {
    console.log(props);
    let valueTextArea = "";
    let info = props.profileInfo.myProfile;
    let posts = info.posts.map(post =>
        <PostItem key={post.id} postInfo={post}/>
    )


    let onChangeTextArea = (e) => {
        valueTextArea = e.target.value;
    }

    let onAddPostClick = () => {
        console.log(valueTextArea);
        props.addPost(valueTextArea);
    }
    return (
        <div className={style.myProfile}>
            <div>
                <div>
                    <img src={info.photo}/>
                </div>
                <p>{info.onLine}</p>
                <p>{info.fullName}</p>
                <p>{info.city}</p>
                <p>{info.birthdayTime}</p>
                <p>{info.work}</p>
                <p>{info.friends}</p>
                <p>{info.about}</p>
            </div>
            <div>
                <div>
                    <textarea onChange={onChangeTextArea}></textarea>
                    <div>
                        <button onClick={onAddPostClick}>POST</button>
                        <input type={"file"}/>
                    </div>
                </div>
                <div>
                    {posts}
                </div>
            </div>
        </div>
    )
}

export default MyProfile;