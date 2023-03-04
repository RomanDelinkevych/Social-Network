import React, {useCallback, useContext, useState} from "react";
import style from "./LogginForm.module.scss";
import app from "../../base";
import {AuthContext} from "../HellperComponents/Authentication/Authentication";
import {Navigate, useNavigate} from "react-router-dom";
import {NavLink} from "react-router-dom";

const LoginForm = (props) => {
    console.log(props.formType);
    let navigate = useNavigate();

    function errorNameChanger(error) {
        let newError;
        console.log(error);
        if (error.code === "auth/wrong-password") {
            newError = "Wrong password!";
        } else if (error.code === "auth/user-not-found") {
            newError = "Wrong email!";
        } else if (error.code === "auth/weak-password") {
            newError = "Password must be 6+ characters!";
        } else {
            newError = "Something go wrong!";
        }

        return (
            newError
        )

    }

    const [errMsg, setErrMsg] = useState(false);

    const handleSubmitSignIn = useCallback(
        async event => {
            event.preventDefault();
            const {email, password} = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value)
                navigate("/")
            } catch (error) {
                setErrMsg(errorNameChanger(error));
            }
        }, []
    );

    const handleSubmitSignUp = useCallback(
        async event => {
            event.preventDefault();
            const {email, password} = event.target.elements;
            console.log(event.target.elements);
            try {
                await app
                    .auth()
                    .createUserWithEmailAndPassword(email.value, password[0].value)
                navigate("/")
            } catch (error) {
                setErrMsg(errorNameChanger(error));
            }
        }, []
    );

    const {currentUser} = useContext(AuthContext);

    if (currentUser) {
        console.log(currentUser);
        return <Navigate to="/"/>
    }

    return (
        <div className={style.LoginForm}>
            <section>
                <p className={errMsg ? "errMsg" : "offScreen"} aria-live="assertive">
                    {errMsg}
                </p>

                {
                    props.formType === "signIn"
                        ? <div>
                            <p>Account: 1</p>
                            <p>Login: test@gmail.com</p>
                            <p>Password: testPasswordAcc1</p>
                        </div>
                        : null
                }


                <form onSubmit={props.formType === "signUp" ? handleSubmitSignUp : handleSubmitSignIn}>
                    <label htmlFor="username">{props.formType === "signUp" ? "Create login" : "Login"}</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={() => {
                            setErrMsg(false)
                        }}
                        autoComplete="on"
                        required
                    />

                    <label htmlFor="password">{props.formType === "signUp" ? "Create password" : "Password"}</label>
                    <input
                        type="password"
                        name="password"
                        placeholder={props.formType === "signUp" ? "New password" : "Password"}
                        onChange={() => {
                            setErrMsg(false)
                        }}
                        autoComplete="on"
                        required
                    />
                    {
                        props.formType === "signUp"
                            ? <input
                                type="password"
                                name="password"
                                placeholder="Repeat new password"
                                onChange={() => {
                                    setErrMsg(false)
                                }}
                                autoComplete="on"
                                required
                            />
                            : null
                    }


                    <button>{props.formType === "signUp" ? "Sign Up" : "Sign In"}</button>
                    {
                        props.formType === "signIn"
                            ? <p>
                                Need an Account?<br/>
                                <NavLink to="/signIn">Sign In</NavLink>
                            </p>
                            : null

                    }

                </form>
            </section>
        </div>
    )

}

export default LoginForm;