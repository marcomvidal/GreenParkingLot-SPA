import { APP_NAME } from "App";
import { Navbar } from "react-bootstrap";

const AppBrand = () => (
  <Navbar.Brand className='text-success' data-testid='logo'>
    {APP_NAME}
  </Navbar.Brand>
);

export default AppBrand;
