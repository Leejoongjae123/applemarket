import React from 'react';
import {useEffect, useState} from 'react'
import {Button,Container,Nav,Navbar,NavDropdown} from 'react-bootstrap'
import { Link,NavLink } from 'react-router-dom';

export default function GNB () {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>사과마켓</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">리스트</Nav.Link>
              <Nav.Link href="/upload">등록</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    
  );
}
