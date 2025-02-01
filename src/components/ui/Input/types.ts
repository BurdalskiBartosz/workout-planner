import { HTMLAttributes } from "react";

export type InputProps = {
  label: string;
  fullWidth?: boolean;
  error?: string;
  placeholder: string;
  disabled?: boolean;
} & HTMLAttributes<HTMLInputElement>;
