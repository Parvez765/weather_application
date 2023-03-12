import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;