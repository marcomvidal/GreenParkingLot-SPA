import React from 'react';
import { Form } from 'react-bootstrap';
import FormControl from 'components/FormControl';
import { FormFieldProps } from './types';

const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, errors, id, ...props }, ref) => (
    <Form.Group>
      <Form.Label htmlFor={id}>{label}</Form.Label>
      <FormControl {...props} id={id} isInvalid={errors !== undefined} ref={ref} />
      <Form.Control.Feedback type='invalid'>{errors?.message}</Form.Control.Feedback>
    </Form.Group>
  ),
);

export default FormField;
