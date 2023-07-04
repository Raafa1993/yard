import React, { useRef, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { IconContainer } from "../Input/styles";
import { Picker, PickerProps } from "@react-native-picker/picker";
import { Container, Content, TextLabel } from "./styles";

type OptionsProps = {
  label: string;
  value: string | number | null;
};

export type SelectProps = PickerProps & {
  icon?: React.ComponentProps<typeof Feather>["name"];
  label?: string;
  value?: string;
  options: OptionsProps[];
};

export default function Select({
  icon,
  options,
  value,
  label,
  ...rest
}: SelectProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <Container>
      {label && <TextLabel>{label}</TextLabel>}
      <Content>
        {/* <IconContainer>
          <Feather
            name={icon}
            size={24}
            color={isFocused || isFilled ? "#4D7ED7" : "#D0D5DD"}
          />
        </IconContainer> */}

        <Picker
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          selectedValue={value}
          {...rest}
          style={{
            backgroundColor: "transparent",
            shadowRadius: 12,
            color: "#D0D5DD",
            width: "100%",
          }}
          dropdownIconColor="#D0D5DD"
        >
          {options.map((row) => (
            <Picker.Item key={row.value} label={row.label} value={row.value} />
          ))}
        </Picker>
      </Content>
    </Container>
  );
}
