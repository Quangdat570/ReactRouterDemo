import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import Carosel from '../Carosel/Carosel';


const Layout = () => {
    return (
        <div>
            <header>
                <Navigation />
                <Carosel/>
                
            </header>

            <Outlet />

            <footer>Footer</footer>
        </div>
    );
};

export default Layout;
