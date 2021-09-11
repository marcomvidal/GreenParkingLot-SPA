import SaveButton from 'components/SaveButton';
import { Button, Modal } from 'react-bootstrap';
import { SubmitFormSetProps } from './types';

const SubmitFormSet = ({ onCancelClick, isSubmitDisabled }: SubmitFormSetProps) => (
  <Modal.Footer>
    <Button variant='outline-secondary' onClick={onCancelClick}>
      Cancel
    </Button>
    <SaveButton isDisabled={isSubmitDisabled} />
  </Modal.Footer>
);

export default SubmitFormSet;
