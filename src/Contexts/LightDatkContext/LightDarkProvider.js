import React, { useEffect, useState } from 'react';
import './theme.css';
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';
import { Container } from 'react-bootstrap';

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
                <p onClick={toggleTheme}>
                    <Container>
                        {
                            theme === 'light' ?
                                <FaMoon className='icon fs-1 position-fixed rounded-circle p-2 m-2 shadow' />
                                :
                                <BsSunFill className='icon fs-2 position-fixed rounded-circle m-2 shadow' />
                        }
                    </Container>
                </p>
            </div>
        </div>
    );
};

export default LightDarkProvider;