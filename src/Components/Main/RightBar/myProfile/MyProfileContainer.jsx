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
        addPost: (text) => {
            dispatch(postActionCreator(text));
        }

    }
}

const MyProfileContainer = connect(mapStateToProps, mapDispatchToProps) (MyProfile)
export default MyProfileContainer;
