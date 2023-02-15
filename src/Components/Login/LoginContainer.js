import {Login} from "./Login";
import {compose} from "@reduxjs/toolkit";
import {connect} from "react-redux";
import {login,getAuth} from "../../reducers/auth";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuthorized,
    }
}
const LoginContainer = compose(connect(mapStateToProps, {
    login,
    getAuth
}))(Login)
export default LoginContainer