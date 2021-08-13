import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

type FormTextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  errors: FieldError | undefined;
};

export type { FormTextFieldProps };
