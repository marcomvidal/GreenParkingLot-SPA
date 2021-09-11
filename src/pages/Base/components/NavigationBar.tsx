import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationBarProps } from '../types';
import { RootState } from 'store/types';
import { signOutAction } from 'store/user/actions';
import AppBrand from 'components/AppBrand';

const NavigationBar = ({ links }: NavigationBarProps) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const onLogout = () => dispatch(signOutAction());

  return (
    <Navbar variant='light' expand='lg' className='shadow-sm border-bottom fixed-top' bg='white'>
      <Container>
        <AppBrand />
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            {links.map((link, key) => (
              <Nav.Link as={Link} key={key} to={link.link}>
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            <NavDropdown title={user.name} id='user-dropdown'>
              <NavDropdown.Item as={Link} to='/configurations'>
                Configurations
              </NavDropdown.Item>
              <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
