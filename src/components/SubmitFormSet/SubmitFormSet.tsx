import { Button, Modal } from 'react-bootstrap';
import { SubmitFormSetProps } from './types';

const SubmitFormSet = ({ onCancelClick, isValid }: SubmitFormSetProps) => (
  <Modal.Footer>
    <Button variant='outline-secondary' onClick={onCancelClick}>
      Cancel
    </Button>
    <Button variant='success' type='submit' disabled={!isValid}>
      Submit
    </Button>
  </Modal.Footer>
);

export default SubmitFormSet;
