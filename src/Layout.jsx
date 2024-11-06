import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function Layout() {
    const [bgColor, setBgColor] = useState('#192518');
    var color;
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 200) {
                setBgColor('#192518');
            } else if (window.scrollY >= 2000 && window.scrollY < 2200) {
                setBgColor('white');
                color("black")
            } else {
                setBgColor('#192518');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location]);

    return (
        <div style={{ backgroundColor: bgColor, transition: 'background-color 0.3s ease', color: color }}>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
