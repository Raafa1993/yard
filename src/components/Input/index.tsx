import React, { ReactNode, useState } from "react";
import { TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  Container,
  IconContainer,
  InputText,
  ViewIconRight,
  Content,
  Label,
} from "./styles";

export type InputProps = TextInputProps & {
  icon?: React.ComponentProps<typeof Feather>["name"];
  iconRight?: ReactNode;
  value?: string;
  label?: string;
};

export function Input({ icon, value, iconRight, label, ...rest }: InputProps) {
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
      {label && <Label>{label}</Label>}
      <Content isFocused={isFocused}>
        {icon && (
          <IconContainer>
            <Feather
              name={icon}
              size={24}
              color={isFocused || isFilled ? "#4D7ED7" : "#98A2B3"}
            />
          </IconContainer>
        )}

        <InputText
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          isFocused={isFocused}
          isIcon={!!icon}
          isIconRight={!!iconRight}
          value={value}
          {...rest}
        />

        {iconRight && <ViewIconRight>{iconRight}</ViewIconRight>}
      </Content>
    </Container>
  );
}
