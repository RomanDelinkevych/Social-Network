import {connect} from "react-redux";
import MyProfile from "./MyProfile";

let mapStateToProps = (state) => {
    return {
        profileInfo: state.myProfilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const MyProfileContainer = connect(mapStateToProps, mapDispatchToProps) (MyProfile)
export default MyProfileContainer;
