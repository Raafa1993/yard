import React, { useState } from "react";
import { Picker, PickerProps } from "@react-native-picker/picker";
import { Container, Content, TextLabel } from "./styles";
import { useThemeStore } from "../../../store/theme";

type OptionsProps = {
  label: string;
  value: string | number | null;
};

export type SelectProps = PickerProps & {
  label?: string;
  value?: string;
  options: OptionsProps[];
};

export default function Select({
  options,
  value,
  label,
  ...rest
}: SelectProps) {
  const { theme } = useThemeStore();

  return (
    <Container>
      {label && <TextLabel>{label}</TextLabel>}
      <Content>
        <Picker
          selectedValue={value}
          {...rest}
          style={{
            backgroundColor: "transparent",
            shadowRadius: 12,
            color: theme === "dark" ? "#D0D5DD" : "#475467",
            width: "100%",
          }}
          dropdownIconColor={theme === "dark" ? "#D0D5DD" : "#475467"}
        >
          {options.map((row) => (
            <Picker.Item key={row.value} label={row.label} value={row.value} />
          ))}
        </Picker>
      </Content>
    </Container>
  );
}
