import {connect} from "react-redux";
import MyProfile from "./MyProfile";
import {postActionCreator} from "../../../../Redux/myProfileReducer";

let mapStateToProps = (state) => {
    return {
        profileInfo: state.myProfilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: ({text, image, time}) => {
            dispatch(postActionCreator(text, image, time));
        }

    }
}

const MyProfileContainer = connect(mapStateToProps, mapDispatchToProps) (MyProfile)
export default MyProfileContainer;
