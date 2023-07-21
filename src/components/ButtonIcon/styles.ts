import styled, { css } from "styled-components/native";

interface ButtonProps {
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "primary" | "outline";
}

const variantsButton = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary_900};
  `,
  outline: css`
    background: ${({ theme }) => theme.colors.gray_800};
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.gray_50};
  `,
};

const sizeButton = {
  xs: css`
    height: 32px;
    width: 32px;
  `,
  sm: css`
    height: 42px;
    width: 42px;
  `,
  md: css`
    height: 48px;
    width: 48px;
  `,
  lg: css`
    height: 56px;
    width: 56px;
  `,
};

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<ButtonProps>`
  ${(props) => sizeButton[props.size || "lg"]}
  ${(props) => variantsButton[props.variant || "primary"]}
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;
