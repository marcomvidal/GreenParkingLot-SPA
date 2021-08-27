import { Dropdown } from 'react-bootstrap';
import styled from 'styled-components';

const DropdownItem = styled(Dropdown.Item)`
  :active {
    background-color: var(--green);
  }
`;

export default DropdownItem;
