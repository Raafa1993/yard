import styled, { css } from "styled-components/native";

interface ButtonProps {
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "primary" | "outline";
}

const variantsButton = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary_600};
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
    padding: 0 24px;
  `,
  sm: css`
    height: 40px;
    padding: 0 24px;
  `,
  md: css`
    height: 48px;
    padding: 0 24px;
  `,
  lg: css`
    padding: 0 24px;
    height: 56px;
  `,
};

const fontButton = {
  xs: css`
    font-size: 12px;
  `,
  sm: css`
    font-size: 14px;
  `,
  md: css`
    font-size: 16px;
  `,
  lg: css`
    font-size: 18px;
  `,
};

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.3,
})<ButtonProps>`
  ${(props) => sizeButton[props.size || "lg"]}
  ${(props) => variantsButton[props.variant || "primary"]}
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<ButtonProps>`
  font-family: "Inter_500Medium";
  color: #fff;
  ${(props) => fontButton[props.size || "lg"]}
`;
