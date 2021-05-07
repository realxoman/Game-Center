import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Container, Nav,Navbar} from 'react-bootstrap'
import './Header.css'

const Header = () => {
    return <header>
    <Navbar className="nav-bg" var>
        <Container>
            <LinkContainer to="/">
            <Navbar.Brand>GAME CENTER</Navbar.Brand>
            </LinkContainer>
            <Nav>
                <LinkContainer to="/cart">
                <Nav.Link>
                 <i className="fa fa-shopping-cart"></i></Nav.Link>
                </LinkContainer>
                <LinkContainer to="/account">
                <Nav.Link> 
                    <i className="fa fa-user"></i>
                    </Nav.Link>
                </LinkContainer>
            </Nav>
        </Container>
    </Navbar>
    </header>

}

export default Header
