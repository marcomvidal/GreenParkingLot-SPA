import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { APP_NAME } from "App";
import { NavigationBarProps } from "../types";

export const NavigationBar = ({ links }: NavigationBarProps) => (
  <Navbar variant='light' expand='lg' className='shadow-sm border-bottom fixed-top' bg='white'>
    <Navbar.Brand href={links[0].link} className='text-success'>
      {APP_NAME}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className="mr-auto">
        {links.map((link, key) => 
          <Nav.Link as={Link} key={key} to={link.link}>{link.label}</Nav.Link>
        )}
      </Nav>
      <Nav>
        <Nav.Link>Guest</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
