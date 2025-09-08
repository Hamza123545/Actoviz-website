"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "react-hook-form";

interface CustomInputProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: "text" | "number" | "email" | "password" | "tel" | "textarea";
}

const CustomInput = ({
  name,
  label,
  placeholder,
  type = "text",
}: CustomInputProps) => {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {type === "textarea" ? (
              <Textarea
                placeholder={placeholder}
                {...field}
                onChange={(event) => {
                  const value = event.target.value;
                  form.setValue(name, value);
                }}
              />
            ) : (
              <Input
                placeholder={placeholder}
                {...field}
                type={type}
                onChange={(event) => {
                  const value = event.target.value;
                  form.setValue(
                    name,
                    type === "number" ? parseFloat(value || "0") : value
                  );
                }}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
