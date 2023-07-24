import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Platform } from "react-native";
import DateTimePicker, {
  AndroidNativeProps,
  IOSNativeProps,
  DateTimePickerEvent,
  BaseProps,
} from "@react-native-community/datetimepicker";

import {
  Container,
  Label,
  Pressable,
  Content,
  ViewIcon,
  Text,
  ModalContainer,
  ModalContent,
  PickerContainer,
  ViewBox,
  ViewRenderPickerModal,
  ButtonActionPicker,
} from "./styles";

type DataProps = IOSNativeProps &
  AndroidNativeProps &
  BaseProps & {
    label?: string;
    onDateChange: (date: any) => void;
    value: Date;
  };

export default function InputDate({ label, value, onDateChange }: DataProps) {
  const [date, setDate] = useState(new Date(value));
  const [show, setShow] = useState(false);

  const onChange = (e: DateTimePickerEvent, selectedDate: any) => {
    onDateChange(new Date(selectedDate));

    setDate(new Date(selectedDate));
    setShow(!show);
  };

  const onAndroidChange = (e: DateTimePickerEvent, selectedDate: any) => {
    setShow(false);
    if (selectedDate) {
      onDateChange(selectedDate);
      setDate(new Date(selectedDate));
    }
  };

  const onCancelPress = () => {
    setDate(new Date(date));
    setShow(false);
  };
  const onDonePress = () => {
    onDateChange(date);
    setShow(false);
  };

  const renderDatePicker = () => {
    return (
      <>
        <DateTimePicker
          display={Platform.OS === "ios" ? "spinner" : "default"}
          timeZoneOffsetInMinutes={0}
          is24Hour={true}
          mode="date"
          onChange={Platform.OS === "ios" ? onChange : onAndroidChange}
          value={value}
          positiveButton={{ label: "OK", textColor: "#1D5AB9" }}
          negativeButton={{ label: "Cancelar", textColor: "#D92D20" }}
          maximumDate={new Date()}
        />
      </>
    );
  };
  return (
    <Container>
      {label && <Label>{label}</Label>}

      <Pressable onPress={() => setShow(true)}>
        <Content>
          <ViewIcon>
            <Feather name="calendar" size={24} color="#98A2B3" />
          </ViewIcon>
          <Text>{`${date.getDate()}/${
            date.getMonth() + 1
          }/${date.getFullYear()}`}</Text>
          {Platform.OS !== "ios" && show && renderDatePicker()}

          {Platform.OS === "ios" && (
            <ModalContainer
              transparent={true}
              animationType="slide"
              visible={show}
              supportedOrientations={["portrait"]}
              onRequestClose={() => setShow(!show)}
            >
              <ModalContent>
                <PickerContainer>
                  <ViewBox>
                    <ViewRenderPickerModal>
                      {renderDatePicker()}
                    </ViewRenderPickerModal>
                    <ButtonActionPicker
                      onPress={onCancelPress}
                      style={{ left: 0 }}
                    >
                      <Text style={{ color: "#D92D20" }}>Cancelar</Text>
                    </ButtonActionPicker>
                    <ButtonActionPicker
                      underlayColor={"transparent"}
                      onPress={onDonePress}
                      style={{ right: 0 }}
                    >
                      <Text style={{ color: "#1D5AB9" }}>Confirmar</Text>
                    </ButtonActionPicker>
                  </ViewBox>
                </PickerContainer>
              </ModalContent>
            </ModalContainer>
          )}
        </Content>
      </Pressable>
    </Container>
  );
}
