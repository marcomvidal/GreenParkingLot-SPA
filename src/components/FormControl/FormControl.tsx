import styled from "styled-components";
import { FormControl as OriginalFormControl } from "react-bootstrap";

const FormControl = styled(OriginalFormControl)`
  :focus {
    border-color: var(--green);
    box-shadow: 0 0 0 0.2rem rgb(0 180 0 / 25%)
  }
`;

export default FormControl;
