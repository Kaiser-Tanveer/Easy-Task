import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Pages/Footer/Footer';
import LightDarkProvider from '../Contexts/LightDatkContext/LightDarkProvider';

const Main = () => {
    return (
        <div>
            <Header />
            <LightDarkProvider />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;