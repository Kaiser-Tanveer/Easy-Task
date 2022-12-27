import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='bg-info'>
            <Container>
                <Link to='/' className='text-decoration-none text-light fw-bold fs-1'><span className='text-warning'>E</span>asy<span className='text-warning'>T</span>ask</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav fill variant='tabs' className='flex mx-auto mb-0 pb-0'>
                        <Nav.Link eventKey="link-1"><Link to='/' className='link-hover fw-semibold text-dark text-decoration-none fs-5 px-4 rounded-top text-decoration-none fs-5 p-2 rounded-top'>Add Task</Link></Nav.Link>
                        <Nav.Link eventKey="link-2"><Link to='/' className='link-hover fw-semibold text-dark text-decoration-none fs-5 px-4 rounded-top text-decoration-none fs-5 p-2 rounded-top'>My Task</Link></Nav.Link>
                        <Nav.Link eventKey="link-3"><Link to='/' className='link-hover fw-semibold text-dark text-decoration-none fs-5 px-4 rounded-top text-decoration-none fs-5 p-2 rounded-top'>Completed Task</Link></Nav.Link>
                        <Nav.Link eventKey="link-4"><Link to='/blog' className='link-hover fw-semibold text-dark text-decoration-none fs-5 px-4 rounded-top text-decoration-none fs-5 p-2 rounded-top'>Blog</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;