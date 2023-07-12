import React from "react";
import { Control, Controller, FieldError } from "react-hook-form";

type Props = SelectProps & {
  control: Control<any>;
  name: string;
  error?: FieldError;
};

import { Error } from "./styles";
import Select, { SelectProps } from "../Select";

export function ControlledSelect({ control, name, error, ...rest }: Props) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select onValueChange={onChange} selectedValue={value} {...rest} />
        )}
      />

      {error && <Error>{error.message}</Error>}
    </>
  );
}
