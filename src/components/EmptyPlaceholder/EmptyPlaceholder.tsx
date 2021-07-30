import { Button } from "react-bootstrap";
import { EmptyPlaceholderProps } from "./types";

const EmptyPlaceholder = ({ message, onClick }: EmptyPlaceholderProps) => (
  <div className='h-100 d-flex align-items-center'>
    <div className='text-center mx-auto'>
      <h5>{ message }</h5>
      <Button variant='success' onClick={onClick}>Start now</Button>
    </div>
  </div>
);

export default EmptyPlaceholder;
