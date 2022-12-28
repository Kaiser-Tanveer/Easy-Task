import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='py-5 bg-dark text-light'>
            <p className='text-center mb-0 pb-0'>&copy; by Easy Task</p>
            <address className='text-center'><i>Chattogram, Bangladesh</i></address>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='m-3'><FaFacebook className='fs-4' /></div>
                <div className='m-3'><FaTwitter className='fs-4' /></div>
                <div className='m-3'><FaLinkedin className='fs-4' /></div>
            </div>
        </footer>
    );
};

export default Footer; 