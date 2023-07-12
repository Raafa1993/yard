import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: transparent;
`;

export const Text = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #000;
  /* margin-bottom: 14px; */
`;

export const SectionButtonsCamera = styled.View`
  background-color: transparent;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
  flex-direction: row;
`;

export const ButtonCamera = styled.TouchableOpacity`
  height: 54px;
  width: 54px;
  align-items: center;
  justify-content: center;
`;

export const ButtonCameraActions = styled.TouchableOpacity`
  padding: 10px 12px;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  background-color: ${({ theme }) => theme.colors.primary_900};
  border-radius: 4px;
`;

export const ContainerModal = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

export const Modal = styled.Modal`
  margin: 0px;
  background-color: #000;
  border-radius: 5px;
  padding: 0px;
  align-items: center;
`;

export const ViewOverley = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #000;

  padding: 0px;
`;

export const ContentModal = styled.View`
  flex: 1;
  width: 100%;
  background-color: #000;

  padding: 0px;
  margin: 0px;
  border-radius: 5px;
`;

export const ViewHeaderCamera = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_900};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 32px;
`;

export const ButtonActionCamera = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  width: 28px;
  height: 28px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`;
