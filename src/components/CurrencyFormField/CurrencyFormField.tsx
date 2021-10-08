import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import FormControl from 'components/FormControl';
import { CurrencyFormFieldProps } from "./types";

const CurrencyFormField =  React.forwardRef<HTMLInputElement, CurrencyFormFieldProps>(
  ({ label, currency, errors, id, ...props }, ref) => (
    <>
      <Form.Label htmlFor={id}>{label}</Form.Label>
      <InputGroup className='mb-3'>
        <InputGroup.Prepend>
          <InputGroup.Text>{currency}</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl {...props} id={id} isInvalid={errors !== undefined} ref={ref} />
        <InputGroup.Append>
          <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup.Append>
        <Form.Control.Feedback type='invalid'>{errors?.message}</Form.Control.Feedback>
      </InputGroup>
    </>
  ),
);

export default CurrencyFormField;
