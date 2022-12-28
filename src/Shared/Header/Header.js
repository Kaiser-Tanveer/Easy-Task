import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import { toast } from 'react-hot-toast';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    // LogOut 
    const logOutHandler = () => {
        logOut()
            .then(() => { })
            .then(err => {
                toast.error(err.message);
            })
    }
    return (
        <Navbar collapseOnSelect expand="lg" className='bg-info pb-lg-0'>
            <Container>
                <Link to='/' className='text-decoration-none text-light fw-bold fs-2'><span className='text-warning'>E</span>asy<span className='text-warning'>T</span>ask</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav fill variant='tabs' className='flex mx-auto mb-0 pb-0'>
                        <Nav.Link eventKey="link-1"><Link to='/' className='link-hover text-dark text-decoration-none px-4 rounded-top text-decoration-none fs-5 p-1 shadow'>Add Task</Link></Nav.Link>
                        <Nav.Link eventKey="link-2"><Link to='myTask' className='link-hover text-dark text-decoration-none px-4 rounded-top text-decoration-none fs-5 p-1 shadow'>My Task</Link></Nav.Link>
                        <Nav.Link eventKey="link-3"><Link to='/completed' className='link-hover text-dark text-decoration-none px-4 rounded-top text-decoration-none fs-5 p-1 shadow'>Completed Task</Link></Nav.Link>
                        <Nav.Link eventKey="link-4"><Link to='/blog' className='link-hover text-dark text-decoration-none px-4 rounded-top text-decoration-none fs-5 p-1 shadow'>Blog</Link></Nav.Link>
                        {
                            user && user?.uid ?
                                <Nav.Link eventKey="link-5"><Link className='link-hover text-dark text-decoration-none px-4 rounded-top text-decoration-none fs-5 p-1 bg-danger border shadow'>Logout</Link></Nav.Link>
                                :
                                <Nav.Link onClick={logOutHandler} eventKey="link-5"><Link to='/register' className='link-hover text-dark text-decoration-none px-4 rounded-top text-decoration-none fs-5 p-1 bg-warning border shadow'>Register</Link></Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;