import { Spot } from "models/Spot";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap"

type Props = {
  isOpened: boolean,
  onHide: () => void,
};

const emptySpot: Spot = {
  id: 0,
  car: undefined,
  label: '',
};

export const SpotsForm = ({ isOpened, onHide }: Props) => {
  const [spot, setSpot] = useState<Spot>(emptySpot);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(spot);
    setSpot(emptySpot);
    onHide();
  }

  return (
    <Modal
      show={isOpened}
      size='lg'
      animation={false}
      aria-labelledby='contained-modal-title-vcenter'
      onHide={onHide}
      centered
    >
      <Form onSubmit={handleSubmit} method='POST'>
        <Modal.Header closeButton>
          <Modal.Title>New spot</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Label</Form.Label>
            <Form.Control
              name='label'
              value={spot.label}
              placeholder='The label that will appear on Spots dashboard'
              onChange={(event) => setSpot({ ...spot, label: event.currentTarget.value})}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-secondary' onClick={onHide}>Cancel</Button>
          <Button variant='success' type='submit'>Submit</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}