import React from 'react'
import { Container, Navbar, Nav, Row, NavDropdown } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from "../actions/userActions";
function Header() {

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(logout())
  }


  return (
    <div>
      <Navbar bg="dark" variant='dark'>
        <Container>
          <LinkContainer to="/"><Navbar.Brand>A.A.A</Navbar.Brand></LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto my-2 " >
              <LinkContainer to="/"><Nav.Link><i className="bi bi-house"></i>Home</Nav.Link></LinkContainer>
              <LinkContainer to="/cart"><Nav.Link><i className="bi bi-cart"></i>Cart</Nav.Link></LinkContainer>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                </NavDropdown>

              ) :

                (
                  <LinkContainer to="/login"><Nav.Link><i className="bi bi-person"></i>Login</Nav.Link></LinkContainer>

                )

              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
