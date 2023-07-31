import { Navbar, Nav, Container, Row } from 'react-bootstrap';
import React from 'react';
import logo from '../components/workoutflo.png';
import {Link} from 'react-router-dom';


export default function Menu() {
return (
    <Navbar expand="lg" >
      <div className="container">
        <Navbar.Brand as={Link} to="/homepage">
          <img className="logo" src={logo} alt="logo"  height="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ms-auto">
          <li className="mx-3"><Link to='/login'>Log in</Link></li>
          <li className="mx-3"><Link to='/logout'>Log out</Link></li>
          <li className="mx-3"><Link to='/signup'>Sign up</Link></li>

          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
)};

