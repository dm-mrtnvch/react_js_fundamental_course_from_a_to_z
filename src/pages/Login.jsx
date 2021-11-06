import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {

    const {setIsAuth} = useContext(AuthContext)

    const login = (event) => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem("auth", "true")
    }

    return (
        <div>
            <h1>page for login</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="enter email"/>
                <MyInput type="password" placeholder="enter password"/>
                <MyButton>log in</MyButton>
            </form>
        </div>
    );
};

export default Login;