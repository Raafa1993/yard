import React, { useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
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
import ListItem from "./ListItem";
import {
  Container,
  TextRow,
  TextTitle,
  ViewContent,
  ViewHeader,
  ViewRow,
} from "./styles";
interface AcordionProps {
  title: string;
  data: any;
}

export default function Accordion({ title = "", data }: AcordionProps) {
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
        height.value = measure(viewRef)?.height;
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
          <ViewRow>
            <TextRow>IV</TextRow>
            <TextRow>BA</TextRow>
            <TextRow>A</TextRow>
            <TextRow>I</TextRow>
          </ViewRow>
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
