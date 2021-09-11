import React, { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import FormControl from 'components/FormControl';
import Spot from 'models/Spot';
import EMPTY_SPOT from './constants/emptySpot';
import { save } from 'services/SpotsService';
import SubmitFormSet from 'components/SubmitFormSet';

const SpotsForm = () => {
  const history = useHistory();
  const [spot, setSpot] = useState<Spot>(EMPTY_SPOT);
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const isValid = spot.label.length > 0 && spot.label.length <= 8;

  const setLabel = (label: string) => setSpot({ ...spot, label });
  const onHide = () => history.goBack();
  const onFill = () => {
    if (!isDirty) setIsDirty(true);
  };

  const onLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.currentTarget.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    save(spot);
    setSpot(EMPTY_SPOT);
    onHide();
  };

  return (
    <Modal show={true} size='lg' animation={false} onHide={onHide} centered>
      <Form onSubmit={onSubmit} method='POST'>
        <Modal.Header closeButton>
          <Modal.Title>New spot</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label htmlFor='label'>Label</Form.Label>
            <FormControl
              id='label'
              name='label'
              value={spot.label}
              isInvalid={isDirty && !isValid}
              onChange={onLabelChange}
              onInput={onFill}
            />
            <Form.Control.Feedback type='invalid'>
              Label must have between 1 and 8 characters
            </Form.Control.Feedback>
          </Form.Group>
        </Modal.Body>
        <SubmitFormSet onCancelClick={onHide} isSubmitDisabled={!isValid} />
      </Form>
    </Modal>
  );
};

export default SpotsForm;
