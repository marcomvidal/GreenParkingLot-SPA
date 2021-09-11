import { Button } from "react-bootstrap";
import { SubmitButtonProps } from "./types";

const SubmitButton = ({ isDisabled, className }: SubmitButtonProps) => (
  <Button variant='success' type='submit' disabled={isDisabled} className={className}>
    Save
  </Button>
)

export default SubmitButton;
