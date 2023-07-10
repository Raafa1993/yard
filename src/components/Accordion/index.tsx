import React, { ReactNode, useState } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import {
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Container, TextTitle, ViewContent, ViewHeader } from "./styles";
import ListItem from "./ListItem";

interface AcordionProps {
  children?: ReactNode;
  title: string;
  data: any;
}

export default function Accordion({
  title = "",
  data,
  children,
}: AcordionProps) {
  const viewRef = useAnimatedRef<View>();
  const [isOpen, setIOpen] = useState(false);
  const open = useSharedValue(false);
  const progress = useDerivedValue(() =>
    open.value ? withSpring(1) : withTiming(0)
  );

  const height: any = useSharedValue(0);
  const style = useAnimatedStyle(() => ({
    height: height.value * progress.value + 2,
    opacity: progress.value === 0 ? 0 : withTiming(1),
  }));

  const handleOnActive = () => {
    if (height.value === 0) {
      runOnUI(() => {
        "worklet";
        height.value = measure(viewRef)?.height + 16;
      })();
    }
    setIOpen((state) => !state);
    open.value = !open.value;
  };

  return (
    <Container>
      <TouchableWithoutFeedback onPress={handleOnActive}>
        <ViewHeader>
          <TextTitle>{title}</TextTitle>
          <Feather
            name={isOpen ? "minus" : "plus"}
            size={20}
            color={isOpen ? "#FFF" : "#4D7ED7"}
          />
        </ViewHeader>
      </TouchableWithoutFeedback>

      <ViewContent style={style}>
        <View ref={viewRef}>
          <View
            style={{
              backgroundColor: "#101828",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              paddingHorizontal: 12,
              borderBottomWidth: 1,
              borderColor: "#1D2939",
              gap: 14,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#D0D5DD",
                width: 28,
                height: 28,
              }}
            >
              IV
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#D0D5DD",
                width: 28,
                height: 28,
              }}
            >
              BA
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#D0D5DD",
                width: 28,
                height: 28,
              }}
            >
              A
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#D0D5DD",
                width: 28,
                height: 28,
              }}
            >
              I
            </Text>
          </View>
          {/* {children} */}
          {data.map((item: any, key: any) => (
            <ListItem
              key={key}
              isLast={key === data.length - 1}
              {...{ item }}
            />
          ))}
        </View>
      </ViewContent>
    </Container>
  );
}
