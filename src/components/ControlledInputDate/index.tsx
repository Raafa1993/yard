import React from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import InputDate from "../InputDate";

type Props = {
  control: Control<any>;
  name: string;
  error?: FieldError;
  label?: string;
};

import { Error } from "./styles";

export function ControlledInputDate({
  control,
  name,
  error,
  label,
  ...rest
}: Props) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputDate
            onDateChange={(date) => onChange(date)}
            value={value}
            label={label}
            {...rest}
          />
        )}
      />

      {error && <Error>{error.message}</Error>}
    </>
  );
}
