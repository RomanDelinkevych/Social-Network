import React, {useEffect, useRef, useState} from "react";
import PostItem from "./PostItem/PostItem";
import style from "./Profile.module.scss"
import {initMyProfileActionCreator, postActionCreator} from "../../../../Redux/myProfileReducer";
import {compose} from "redux";
import {connect, useDispatch} from "react-redux";
import {firebaseMyProfile} from "../../../../API/Firebase/myProfileSlice";
import {useLocation} from "react-router-dom";
import LoadingComponents from "../../../LoadingComponents/LoadingComponents";
import {getUserDataAlways} from "../../../../API/Firebase/FirebaseHelper";

let mapStateToProps = (state) => {
    console.log(state);
    return {
        profileInfo: state.myProfilePage,
        friendsInfo: state.friendsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: ({text, image, time}) => {
            dispatch(postActionCreator(text, image, time));
        },
        firebaseDataActionCreator: (data) => {
            dispatch(firebaseMyProfile())
        }
    }
}

const Profile = (props) => {
    useEffect(() => {
        props.firebaseDataActionCreator();
    }, [])

    let isLoad = props.profileInfo.isLoaded;
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

    let posts;
    if (isLoad && info.posts) {
        posts = info.posts.map(post => <PostItem key={post.id} postInfo={post}/>)
    }


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
                    {isLoad ? <img src={info.photo} alt={info.photo}/> : <LoadingComponents/>}
                </div>
                <div>
                    <div/>
                    <p>{info.onLine}</p>
                </div>
                <p>{isLoad ? info.fullName : <LoadingComponents/>}</p>
                <p>City: {isLoad ? info.city : <LoadingComponents/>}</p>
                <p>Birthday: {isLoad ? info.birthdayTime : <LoadingComponents/>}</p>
                <p>Work: {isLoad ? info.work : <LoadingComponents/>}</p>
                <p>Friends: {isLoad ? info.friends : <LoadingComponents/>}</p>
                <p>About: {isLoad ? info.about : <LoadingComponents/>}</p>
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
                    {isLoad ? posts : <LoadingComponents/>}
                </div>
            </div>
        </div>
    )
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Profile)