import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { APP_NAME } from "../../App";

type Link = {
  link: string,
  label: string,
};

export function NavigationBar() {
  const links: Link[] = [
    { label: 'Home', link: '#home' },
    { label: 'Link', link: '#link' },
  ];

  return (
    <Navbar bg='success' variant='dark' expand='lg' className='shadow-sm border-bottom'>
      <Navbar.Brand href={links[0].link}>{APP_NAME}</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className="mr-auto">
            {links.map((link, index) => 
              <Nav.Link key={index} href={link.link}>{link.label}</Nav.Link>
            )}
          </Nav>
          <Nav>
            <Nav.Link>Guest</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}