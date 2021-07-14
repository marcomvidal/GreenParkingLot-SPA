import { Spot } from "models/Spot";
import { ChangeEvent, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap"
import { useHistory } from "react-router-dom";
import { emptySpot } from './data/emptySpot';

export const SpotsForm = () => {
  const history = useHistory();
  const [spot, setSpot] = useState<Spot>(emptySpot);

  const onHide = () => history.goBack();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(spot);
    setSpot(emptySpot);
    onHide();
  }

  const setLabel = (event: ChangeEvent<HTMLInputElement>) => {
    setSpot({ ...spot, label: event.currentTarget.value });
  };

  return (
    <Modal show={true} size='lg' animation={false} onHide={onHide} centered>
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
              placeholder='The label that will appear on dashboard'
              onChange={setLabel}
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