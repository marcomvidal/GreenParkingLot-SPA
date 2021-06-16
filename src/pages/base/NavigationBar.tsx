import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { APP_NAME } from "../../App";
import { LINKS } from "./links";

export const NavigationBar = () => (
  <Navbar bg='success' variant='dark' expand='lg' className='shadow-sm border-bottom'>
    <Navbar.Brand href={LINKS[0].link}>{APP_NAME}</Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className="mr-auto">
          {LINKS.map((link, key) => 
            <Nav.Link key={key} href={link.link}>{link.label}</Nav.Link>
          )}
        </Nav>
        <Nav>
          <Nav.Link>Guest</Nav.Link>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
);
