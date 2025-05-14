import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues } from "react-hook-form";
import { FormFieldProps } from "./types";

const TextField = <T extends FieldValues>({
  control,
  name,
  placeholder,
  label,
  ...rest
}: FormFieldProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel className="text-sm font-bold text-gray-300">
              {label}
            </FormLabel>
          )}
          <FormControl>
            <Input
              placeholder={placeholder}
              className="rounded"
              {...field}
              {...rest}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextField;
