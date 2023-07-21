import { css } from "styled-components";
import styled from "styled-components/native";

interface PropsButton {
  isActive?: boolean;
  type: "remocao" | "vmc";
}

const buttonTypeVariations = {
  remocao: css`
    border: 1px solid ${({ theme }) => theme.colors.warning_400};
    color: ${({ theme }) => theme.colors.primary_600};
  `,
  vmc: css`
    border: 1px solid ${({ theme }) => theme.colors.success_400};
    color: ${({ theme }) => theme.colors.green_600};
  `,
};

const buttonTypeColorVariations = {
  remocao: css`
    color: ${({ theme }) => theme.colors.warning_400};
  `,
  vmc: css`
    color: ${({ theme }) => theme.colors.success_400};
  `,
};

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.3,
})<PropsButton>`
  flex: 1;
  height: 40px;
  background: ${({ theme }) => theme.colors.buttonFilterBackground};
  border-radius: 6px;
  justify-content: center;
  align-items: center;

  ${({ isActive, type }) => isActive && buttonTypeVariations[type]}
`;

export const Title = styled.Text<PropsButton>`
  font-family: "Inter_500Medium";
  ${({ isActive, type }) =>
    isActive
      ? buttonTypeColorVariations[type]
      : css`
          color: ${({ theme }) => theme.colors.buttonFilterText};
        `}
  font-size: 12px;
`;
