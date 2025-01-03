import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import '../styles/navbartop.scss';

export default function NavBarTop() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary navbar-main">
            <Container>
                <Navbar.Brand>
                    <Link to="/" onClick={scrollToTop}>
                        <img id="logo" src={Logo} alt="" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="text-center" id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link
                            className={`nav-link text-center ${isActive('/') ? 'active fw-bold' : ''}`}
                            to="/"
                            onClick={scrollToTop}
                        >
                            Home
                        </Link>
                        <Link
                            className={`nav-link text-center ${isActive('/Products') ? 'active fw-bold' : ''}`}
                            to="/Products"
                            onClick={scrollToTop}
                        >
                            Products and Services
                        </Link>
                        <Link
                            className={`nav-link text-center ${isActive('/About') ? 'active fw-bold' : ''}`}
                            to="/About"
                            onClick={scrollToTop}
                        >
                            About
                        </Link>
                        <Link
                            className={`nav-link text-center ${isActive('/Blogs') ? 'active fw-bold' : ''}`}
                            to="/Blogs"
                            onClick={scrollToTop}
                        >
                            Blogs
                        </Link>
                        <Link
                            className={`nav-link text-center ${isActive('/Contact') ? 'active fw-bold' : ''}`}
                            to="/Contact"
                            onClick={scrollToTop}
                        >
                            Contact
                        </Link>
                        <Link
                            className={`nav-link text-center ${isActive('/Support') ? 'active fw-bold' : ''}`}
                            to="/Support"
                            onClick={scrollToTop}
                        >
                            Classify Support
                        </Link>
                    </Nav>
                    <Button className="fw-bold d-none d-md-none d-lg-none d-xl-block">
                        Book a Free Demo
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
