import React from 'react'
import "../Style/Style.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
  <>
    <Navbar className='NavBar_main'  expand="lg" >
      <Container>
        <Navbar.Brand className='NavBar_link' href="/home">HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='NavBar_link' href="AnimeList">AnimeList</Nav.Link>
            <Nav.Link className='NavBar_link' href="/AboutMe">AboutMe</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className='NavBar_link' href="/SignUp">SignUp</Nav.Link>
            <Nav.Link className='NavBar_link' eventKey={2} href="/SignIn">
             SignIn
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  )
}

export default NavBar