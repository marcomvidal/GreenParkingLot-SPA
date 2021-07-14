import { Button } from "react-bootstrap";
import { NoSpotPlaceholderProps } from "../types";

export const NoSpotPlaceholder = ({ onCreateSpot }: NoSpotPlaceholderProps) => (
  <div className='h-100 d-flex align-items-center'>
    <div className='text-center mx-auto'>
      <h5>No spots registered yet.</h5>
      <Button variant='success' onClick={onCreateSpot}>Start now</Button>
    </div>
  </div>
);
