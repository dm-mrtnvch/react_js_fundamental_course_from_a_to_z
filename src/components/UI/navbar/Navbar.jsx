import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import "./../../../styles/App.css"
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {

    const {setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem("auth")
    }
    console.log(localStorage)
    return (
        <div className="navbar">
            <MyButton onClick={logout}>log out</MyButton>
            <div className="navbar__items">
                <Link to="/posts">Posts</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    );
};

export default Navbar;