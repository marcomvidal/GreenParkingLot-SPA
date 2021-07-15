import { Spot } from "models/Spot";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap"
import { useHistory } from "react-router-dom";
import { save } from "services/SpotsService";
import { EMPTY_SPOT } from './data/emptySpot';

export const SpotsForm = () => {
  const history = useHistory();
  const [spot, setSpot] = useState<Spot>(EMPTY_SPOT);

  const onHide = () => { history.goBack(); }

  const setLabel = (label: string) => setSpot({ ...spot, label });

  const isValid = spot.label.length > 0 && spot.label.length <= 8;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    save(spot);
    setSpot(EMPTY_SPOT);
    onHide();
  }
  
  return (
    <Modal show={true} size='lg' animation={false} onHide={onHide} centered>
      <Form onSubmit={handleSubmit} method='POST'>
        <Modal.Header closeButton>
          <Modal.Title>New spot</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label htmlFor='label'>Label</Form.Label>
            <Form.Control
              id='label'
              name='label'
              value={spot.label}
              placeholder='The label that will appear on the dashboard'
              onChange={(e) => setLabel(e.currentTarget.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-secondary' onClick={onHide}>Cancel</Button>
          <Button variant='success' type='submit' disabled={!isValid}>Submit</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
