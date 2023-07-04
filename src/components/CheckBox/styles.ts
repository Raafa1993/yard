import { css } from "styled-components";
import { styled } from "styled-components/native";

type CheckBoxProps = {
  isSelected?: boolean;
  isRadius?: boolean;
  isDisabled?: boolean;
};

type ContainerDirectionProps = {
  direction?: "row" | "column";
};

export const Container = styled.View`
  gap: 6px;
`;

export const Content = styled.View<ContainerDirectionProps>`
  gap: 10px;

  ${({ direction }) =>
    direction === "row" &&
    css`
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
    `}
`;

export const ButtonCheckbox = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Box = styled.View<CheckBoxProps>`
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;

  border-width: 1px;
  border-style: solid;
  border-color: #d0d5dd;
  border-radius: ${({ isRadius }) => (isRadius ? "50px" : "6px")};
  background: #fff;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background: #aec6ff;
      border-color: #4d7ed7;
    `}

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      background: #eaecf0;
      border-color: #98a2b3;
    `}
`;

export const TextLabel = styled.Text<CheckBoxProps>`
  color: ${({ isDisabled }) => (isDisabled ? "#D0D5DD" : "#fff")};
  font-size: 18px;
  font-family: "Inter_400Regular";
  text-transform: capitalize;
`;
