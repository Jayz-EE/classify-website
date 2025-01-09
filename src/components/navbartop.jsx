import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import '../styles/navbartop.scss';
import { useState } from 'react';

export default function NavBarTop() {
    const location = useLocation();
    const [isNavCollapsed, setIsNavCollapsed] = useState(true); // State to track navbar collapse
    const isActive = (path) => location.pathname === path;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleLinkClick = () => {
        setIsNavCollapsed(true); // Collapse the navbar when a link is clicked
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary navbar-main">
            <Container>
                <Navbar.Brand>
                    <Link to="/" onClick={scrollToTop}>
                        <img id="logo" src={Logo} alt="" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav" 
                    onClick={() => setIsNavCollapsed(!isNavCollapsed)}
                />
                <Navbar.Collapse className="text-center" id="basic-navbar-nav" in={!isNavCollapsed}>
                    <Nav className="me-auto">
                        <Link
                            className={`nav-link text-center ${isActive('/') ? 'active fw-bold' : ''}`}
                            to="/"
                            onClick={() => { scrollToTop(); handleLinkClick(); }} // Collapse navbar after click
                        >
                            Home
                        </Link>
                        <Link
                            className={`nav-link text-center ${isActive('/Products') ? 'active fw-bold' : ''}`}
                            to="/Products"
                            onClick={() => { scrollToTop(); handleLinkClick(); }}
                        >
                            Products and Services
                        </Link>
                        <Link
                            className={`nav-link text-center ${isActive('/About') ? 'active fw-bold' : ''}`}
                            to="/About"
                            onClick={() => { scrollToTop(); handleLinkClick(); }}
                        >
                            About Us
                        </Link>
                        <Link
                            className={`nav-link text-center ${isActive('/Blogs') ? 'active fw-bold' : ''}`}
                            to="/Blogs"
                            onClick={() => { scrollToTop(); handleLinkClick(); }}
                        >
                            Blogs
                        </Link>
                        <Link
                            className={`nav-link text-center ${isActive('/Contact') ? 'active fw-bold' : ''}`}
                            to="/Contact"
                            onClick={() => { scrollToTop(); handleLinkClick(); }}
                        >
                            Contact
                        </Link>
                        <Link
                            className={`nav-link text-center ${isActive('/Support') ? 'active fw-bold' : ''}`}
                            to="/Support"
                            onClick={() => { scrollToTop(); handleLinkClick(); }}
                        >
                            Classify Support
                        </Link>
                    </Nav>
                    <Link 
                        className="btn btn-primary fw-bold d-none d-md-none d-lg-none d-xl-block" 
                        to="/Contact" 
                        onClick={() => { scrollToTop(); handleLinkClick(); }}
                    >
                        Book a Free Demo
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
