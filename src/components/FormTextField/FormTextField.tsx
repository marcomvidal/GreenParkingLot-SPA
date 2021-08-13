import React from "react";
import { Form } from "react-bootstrap";
import FormControl from "components/FormControl";
import { FormTextFieldProps } from "./types";

const FormTextField = React.forwardRef<HTMLInputElement, FormTextFieldProps>(
  ({ label, errors, id, ...props }, ref) => (
    <Form.Group>
      <Form.Label htmlFor={id}>{label}</Form.Label>
      <FormControl
        {...props}
        id={id}
        isInvalid={errors !== undefined}
        ref={ref}
      />
      <Form.Control.Feedback type='invalid'>
        { errors?.message }
      </Form.Control.Feedback>
    </Form.Group>
));

export default FormTextField;
