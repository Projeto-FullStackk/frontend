import { ChangeEvent } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type tFormElement = "input" | "textarea" | "select";
type tInputType =
  | "text"
  | "email"
  | "password"
  | "date"
  | "tel"
  | "number"
  | "button";

export interface iInputProps {
  as: tFormElement;
  id: string;
  label: string;
  register: UseFormRegisterReturn;
  disabled?: boolean;
  errorMessage?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  options?: string[];
  placeholder?: string;
  type?: tInputType;
  value?: string;
  defaultValue?: string;
}

export type iInputFormProps = Pick<
  iInputProps,
  "id" | "type" | "placeholder" | "value" | "disabled" | "register"
>;

export type iTextareaFormProps = Pick<
  iInputProps,
  "id" | "placeholder" | "disabled" | "register"
>;

export type iSelectFormProps = Pick<
  iInputProps,
  "id" | "options" | "placeholder" | "onChange" | "disabled" | "register"
>;
