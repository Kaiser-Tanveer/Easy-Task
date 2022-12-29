import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    // LogOut 
    const logOutHandler = () => {
        logOut()
            .then(() => { })
            .then(err => {
                console.log(err);
            })
    }
    return (
        <Navbar collapseOnSelect expand="lg" className='bg-info pb-lg-0 shadow' style={{ zIndex: '1000' }}>
            <Container>
                <Link to='/' className='text-decoration-none text-light fw-bold fs-1'><span className='text-warning'>E</span>asy<span className='text-warning'>T</span>ask</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav fill variant='tabs' className='flex mx-auto'>
                        <Nav.Link><NavLink to='/' className={
                            ({ isActive }) => isActive ? 'isActive shadow text-dark text-decoration-none px-4 rounded-top text-decoration-none fs-5 p-2 my-sm-2 w-100 shadow bg-white' :
                                'text-dark text-decoration-none px-4 rounded-top text-decoration-none fs-5 p-2 my-sm-2 w-100 shadow'
                        }>Add Task</NavLink></Nav.Link>
                        <Nav.Link><NavLink to='/myTask' className={
                            ({ isActive }) => isActive ? 'isActive shadow text-dark text-decoration-none px-4 rounded-top text-decoration-none fs-5 p-2 my-sm-2 w-100 shadow bg-white' :
                                'text-dark text-decoration-none px-4 rounded-top text-decoration-none fs-5 p-2 my-sm-2 w-100 shadow'
                        }>My Task</NavLink></Nav.Link>
                        <Nav.Link><NavLink to='/completed' className={
                            ({ isActive }) => isActive ? 'isActive shadow text-dark text-decoration-none px-4 rounded-top text-decoration-none fs-5 p-2 my-sm-2 w-100 shadow bg-white' :
                                'text-dark text-decoration-none px-4 rounded-top text-decoration-none fs-5 p-2 my-sm-2 w-100 shadow'
                        }>Completed Task</NavLink></Nav.Link>
                        <Nav.Link><NavLink to='/blog' className={
                            ({ isActive }) => isActive ? 'isActive shadow text-dark text-decoration-none px-4 rounded-top text-decoration-none fs-5 p-2 my-sm-2 w-100 shadow bg-white' :
                                'text-dark text-decoration-none px-4 rounded-top text-decoration-none fs-5 p-2 my-sm-2 w-100 shadow'
                        }>Blog</NavLink></Nav.Link>
                        {
                            user && user?.uid ?
                                <Nav.Link onClick={logOutHandler}><NavLink className='text-dark text-decoration-none px-4 rounded-top text-decoration-none fs-5 p-2 my-sm-2 w-100 bg-danger border shadow'>Logout</NavLink></Nav.Link>
                                :
                                <Nav.Link><NavLink to='/register' className='text-dark text-decoration-none px-4 rounded-top text-decoration-none fs-5 p-2 my-sm-2 w-100 bg-warning border shadow'>Register</NavLink></Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;