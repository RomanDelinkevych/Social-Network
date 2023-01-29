import React, {useRef, useState} from "react";
import PostItem from "./PostItem/PostItem";
import style from "./Profile.module.scss"
import {postActionCreator} from "../../../../Redux/myProfileReducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {useLocation} from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        profileInfo: state.myProfilePage,
        friendsInfo: state.friendsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: ({text, image, time}) => {
            dispatch(postActionCreator(text, image, time));
        }
    }
}

const Profile = (props) => {
    //Hooks
    const textAreaRef = useRef();
    const location = useLocation();
    const [selectedFile, setSelectedFile] = useState(undefined);

    let info; //init main obj that will be needed to display profile page
    if (location.pathname === "/profile") {
        info = props.profileInfo.myProfile;
    } else {
        props.friendsInfo.friends.forEach(friend => {
            if (location.pathname === "/profile" + friend.webPath) {
                info = friend;
            }
        })
    }

    let posts = info.posts.map(post =>
        <PostItem key={post.id} postInfo={post}/>
    )

    let onAddPostClick = () => {
        let post = {
            text: null,
            image: null,
            time: ""
        }
        post.time = new Date().toLocaleString()
        if (textAreaRef.current.value.length !== 0) {
            post.text = textAreaRef.current.value;
            textAreaRef.current.value = "";
        }
        if (selectedFile !== undefined) {
            console.log(selectedFile.name);
            post.image = selectedFile;
        }
        if (post.text !== null || post.image !== null) {
            props.addPost(post);
        }
        setSelectedFile(undefined);
    }
    return (
        <div className={style.myProfile}>
            <div>
                <div>
                    <img src={info.photo} alt={info.photo}/>
                </div>
                <div>
                    <div/>
                    <p>{info.onLine}</p>
                </div>
                <p>{info.fullName}</p>
                <p>City: {info.city}</p>
                <p>Birthday: {info.birthdayTime}</p>
                <p>Work: {info.work}</p>
                <p>Friends: {info.friends}</p>
                <p>About: {info.about}</p>
            </div>
            <div>
                <div>
                    <textarea ref={textAreaRef}></textarea>
                    <div>
                        <button onClick={onAddPostClick}>POST</button>
                        <input
                            onChange={(e) => {
                                setSelectedFile(e.target.files[0])
                                e.target.value = null;
                            }}
                            type={"file"}/>
                    </div>
                </div>
                <div>
                    {posts}
                </div>
            </div>
        </div>
    )
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Profile)