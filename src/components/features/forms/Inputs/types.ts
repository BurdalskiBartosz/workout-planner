import { ComponentProps } from "react";
import { Control, FieldPath, FieldValues } from "react-hook-form";

export type FormFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  placeholder: string;
  label?: string;
} & ComponentProps<"input">;
