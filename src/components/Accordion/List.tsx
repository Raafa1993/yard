import React, { useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Animated, {
  useAnimatedRef,
  measure,
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  withTiming,
  runOnUI,
} from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";
import Chevron from "./Chevron";
import Item, { ListItem } from "./ListItem";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101828",
    padding: 16,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  items: {
    overflow: "hidden",
  },
});

export interface List {
  name: string;
  items: ListItem[];
}

interface ListProps {
  list: List;
}

const List = ({ list }: ListProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const aref = useAnimatedRef<any>();
  const open = useSharedValue(false);
  const progress = useDerivedValue(() =>
    open.value ? withSpring(1) : withTiming(0)
  );
  const height = useSharedValue(0);
  const headerStyle = useAnimatedStyle(() => ({
    borderBottomLeftRadius: progress.value === 0 ? 8 : 0,
    borderBottomRightRadius: progress.value === 0 ? 8 : 0,
  }));
  const style = useAnimatedStyle(() => ({
    height: height.value * progress.value + 1,
    opacity: progress.value === 0 ? 0 : 1,
  }));

  const handleOnActive = () => {
    if (height.value === 0) {
      runOnUI(() => {
        "worklet";
        height.value = measure(aref).height;
      })();
    }
    open.value = !open.value;
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={handleOnActive}>
        <Animated.View style={[styles.container, headerStyle]}>
          <Text style={styles.title}>Dianteira</Text>
          <Feather
            name={open.value ? "plus" : "minus"}
            size={20}
            color={open.value ? "#4D7ED7" : "#fff"}
          />
          {/* <Chevron {...{ progress }} /> */}
        </Animated.View>
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.items, style]}>
        <View ref={aref}>
          {list.items.map((item, key) => (
            <Item
              key={key}
              isLast={key === list.items.length - 1}
              {...{ item }}
            />
          ))}
        </View>
      </Animated.View>
    </>
  );
};

export default List;
