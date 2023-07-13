import { useEffect, useRef, useState } from "react";
import { Text, StyleSheet, Image } from "react-native";
import { Camera, FlashMode } from "expo-camera";
import { Ionicons, Feather } from "@expo/vector-icons";

import {
  Container,
  SectionButtonsCamera,
  ButtonCamera,
  ButtonCameraActions,
  ContainerModal,
  Modal,
  ViewOverley,
  ContentModal,
  ViewHeaderCamera,
  ButtonActionCamera,
} from "./styles";
interface PropsCamera {
  onRequestClose: () => void;
  handleInputChange: (item: any) => void;
  isVisible: boolean;
}

export default function CardCamera({
  handleInputChange,
  onRequestClose,
  isVisible = false,
}: PropsCamera) {
  const [hasCameraPermission, setHasCameraPermission] = useState<any>(null);
  const cameraRef = useRef<any>();
  const [photo, setPhoto] = useState<any>();
  const [flashMode, setFlashMode] = useState(FlashMode.off);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
    })();
  }, []);

  function toggleFlashMode() {
    setFlashMode((prevFlashMode) =>
      prevFlashMode === FlashMode.off ? FlashMode.on : FlashMode.off
    );
  }

  let takePic = async () => {
    let options = {
      quality: 0.2,
      base64: true,
      exif: false,
      maxWidth: 400,
      maxHeight: 400,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let savePhoto = () => {
      setPhoto(undefined);
      handleInputChange(photo.base64);
      onRequestClose();
    };

    return (
      <ContainerModal>
        <Modal animationType="slide" transparent={true} visible={isVisible}>
          <ViewOverley>
            <ContentModal>
              <ViewHeaderCamera>
                <ButtonActionCamera
                  onPress={() => {
                    setPhoto(undefined);
                    onRequestClose();
                  }}
                  style={{ alignItems: "flex-end", width: "100%" }}
                >
                  <Feather name="x" size={24} color="#fff" />
                </ButtonActionCamera>
              </ViewHeaderCamera>
              <Image
                style={styles.preview}
                source={{ uri: "data:image/jpg;base64," + photo.base64 }}
              />
              <SectionButtonsCamera>
                <ButtonCameraActions
                  activeOpacity={0.7}
                  onPress={() => setPhoto(undefined)}
                >
                  <Text
                    style={{ color: "#fff", fontFamily: "Inter_600SemiBold" }}
                  >
                    Tirar outra foto
                  </Text>
                </ButtonCameraActions>
                {hasCameraPermission ? (
                  <ButtonCameraActions activeOpacity={0.7} onPress={savePhoto}>
                    <Text
                      style={{ color: "#fff", fontFamily: "Inter_600SemiBold" }}
                    >
                      Salvar
                    </Text>
                  </ButtonCameraActions>
                ) : undefined}
              </SectionButtonsCamera>
            </ContentModal>
          </ViewOverley>
        </Modal>
      </ContainerModal>
    );
  }

  return (
    <ContainerModal>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <ViewOverley>
          <ContentModal>
            <Container>
              <ViewHeaderCamera>
                <ButtonActionCamera onPress={toggleFlashMode}>
                  <Feather
                    name={flashMode === FlashMode.off ? "zap-off" : "zap"}
                    size={16}
                    color={flashMode === FlashMode.off ? "#fff" : "#4D7ED7"}
                  />
                </ButtonActionCamera>

                <ButtonActionCamera onPress={() => onRequestClose()}>
                  <Feather name="x" size={24} color="#fff" />
                </ButtonActionCamera>
              </ViewHeaderCamera>
              <Camera
                style={styles.container}
                ref={cameraRef}
                flashMode={flashMode}
              ></Camera>
              <SectionButtonsCamera>
                <ButtonCamera activeOpacity={0.7} onPress={takePic}>
                  <Ionicons name="radio-button-on" size={54} color="white" />
                </ButtonCamera>
              </SectionButtonsCamera>
            </Container>
          </ContentModal>
        </ViewOverley>
      </Modal>
    </ContainerModal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
});
