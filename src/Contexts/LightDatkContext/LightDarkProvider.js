import React, { useEffect, useState } from 'react';
import './theme.css';
import { FaMoon } from 'react-icons/fa';

const LightDarkProvider = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <div className='theme'>
            <div className={`App ${theme}`}>
                <p onClick={toggleTheme}><FaMoon className='fs-4 position-fixed' /></p>
            </div>
        </div>
    );
};

export default LightDarkProvider;