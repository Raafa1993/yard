import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Container, ButtonCheckbox, Content, Box, TextLabel } from "./styles";
import { TouchableOpacityProps } from "react-native";

type OptionsProps = {
  label: string;
  id: string | number | null;
};

export type SelectProps = TouchableOpacityProps & {
  label?: string;
  direction?: "row" | "column";
  isRadius?: boolean;
  isDisabled?: boolean;
  multiple?: boolean;
  options: OptionsProps[];
  onChange: (selectedItems: any[]) => void;
};

export default function CheckBox({
  label,
  direction = "column",
  isRadius = false,
  isDisabled = false,
  multiple = false,
  options,
  onChange,
}: SelectProps) {
  const [selected, setSelected] = useState<any[]>([]);

  function toggle(id: any) {
    let arrSelecteds = [...selected];
    const index = arrSelecteds.indexOf(id);

    if (index !== -1) {
      arrSelecteds.splice(index, 1);
    } else {
      if (multiple) {
        arrSelecteds.push(id);
      } else {
        arrSelecteds = [id];
      }
    }
    setSelected(arrSelecteds);
  }

  useEffect(() => {
    onChange(selected);
  }, [selected]);

  return (
    <Container>
      {label && <TextLabel>{label}</TextLabel>}
      <Content direction={direction}>
        {options.map((row) => (
          <ButtonCheckbox
            disabled={isDisabled}
            key={row.id}
            onPress={() => toggle(row?.id)}
          >
            <Box
              isSelected={selected.includes(row.id)}
              isRadius={isRadius}
              isDisabled={isDisabled}
            >
              {selected.includes(row.id) && (
                <Feather
                  name="check"
                  color={isDisabled ? "#9DBAF0" : "#4D7ED7"}
                  size={20}
                />
              )}
            </Box>
            <TextLabel isDisabled={isDisabled}>{row.label}</TextLabel>
          </ButtonCheckbox>
        ))}
      </Content>
    </Container>
  );
}
