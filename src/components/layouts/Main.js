import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
//11. create main component and pass header and outlent componet
const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;