import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { Container, InputText, Content, Label } from "./styles";

export type InputProps = TextInputProps & {
  label?: string;
};

export function TextArea({ label, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  return (
    <Container>
      {label && <Label>text label</Label>}
      <Content isFocused={isFocused}>
        <InputText
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          isFocused={isFocused}
          numberOfLines={10}
          multiline={true}
          {...rest}
        />
      </Content>
    </Container>
  );
}
