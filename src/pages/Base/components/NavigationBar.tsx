import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { APP_NAME } from "App";
import { NavigationBarProps } from "../types";
import { RootState } from "store/types";

const NavigationBar = ({ links }: NavigationBarProps) => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <Navbar variant='light' expand='lg' className='shadow-sm border-bottom fixed-top' bg='white'>
      <Navbar.Brand href={links[0].link} className='text-success' data-testid='logo'>
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
          <NavDropdown title={user.username} id="user-dropdown">
            <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default NavigationBar;
