import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { APP_NAME } from "../../App";
import { NavigationLink } from "./links";

type Props = {
  links: NavigationLink[];
}

export const NavigationBar = ({ links }: Props) => {
  return (
    <Navbar variant='light' expand='lg' className='shadow-sm border-bottom'>
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
};
