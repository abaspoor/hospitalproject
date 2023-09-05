import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Header from "../components/Header/Header";
import SignIn from "../components/user/login";


const Main = () => {
    return (
        <>
            <Header/>
            <Routes >
                <Route exact path="/signin/" Component={SignIn}/>
            </Routes >
		</>
    );
}

export default Main;