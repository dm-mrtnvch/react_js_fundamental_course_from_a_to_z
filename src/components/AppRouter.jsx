import React, {useContext} from 'react';
import {Outlet, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import {AuthContext} from "../context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {

    const {isLoading} = useContext(AuthContext)

    if(isLoading){
        return <Loader/>
    }

    return (
        <Routes>
            <Route path="about" element={<About/>}/>
            <Route path="posts" element={<Outlet/>}>
                <Route index element={<Posts/>} />
                <Route path=":id" element={<PostIdPage/>}/>
            </Route>
            <Route path="*" element={<Posts/>}/>
        </Routes>
    );
};

export default AppRouter;

