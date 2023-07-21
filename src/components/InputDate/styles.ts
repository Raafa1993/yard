import styled from "styled-components/native";

export const Container = styled.View`
  margin-bottom: 8px;
  flex: 1;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.inputLabel};
  font-size: 16px;
  font-family: "Inter_400Regular";
  margin-bottom: 6px;
  text-transform: capitalize;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
  padding-left: 6px;
  pointer-events: none;
`;

export const ViewIcon = styled.View``;

export const Text = styled.Text`
  font-size: 16px;
  padding: 5px 10px;
  font-family: "Inter_400Regular";
  color: ${({ theme }) => theme.colors.inputText};
`;

export const Pressable = styled.Pressable.attrs({
  style: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
})`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border-radius: 6px;
`;

export const ModalContainer = styled.Modal``;

export const ModalContent = styled.View`
  flex: 1;
`;

export const PickerContainer = styled.TouchableHighlight.attrs({
  underlayColor: "#fff",
})`
  background-color: #fff;
  width: 100%;
  height: 30%;
  position: absolute;
  bottom: 0;
`;

export const ViewBox = styled.View`
  background-color: #fff;
`;

export const ViewRenderPickerModal = styled.View`
  margin-top: 20px;
`;

export const ButtonActionPicker = styled.TouchableHighlight.attrs({
  underlayColor: "transparent",
})`
  position: absolute;
  top: 0;
  height: 50px;
  padding: 0 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
