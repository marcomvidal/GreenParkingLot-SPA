import { Button } from "react-bootstrap";
import { SubmitButtonProps } from "./types";

const SubmitButton = ({ isDisabled, text, className }: SubmitButtonProps) => (
  <Button variant='success' type='submit' disabled={isDisabled} className={className}>
    {text ?? 'Save'}
  </Button>
)

export default SubmitButton;
