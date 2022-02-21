import React, { useContext } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './navbar.css'
import { UserContext } from '../../App';
const NavBar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ETSY</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Orders</Nav.Link>
              <button>
                <a href="/login">Login</a>
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavBar;