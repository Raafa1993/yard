import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewProps,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import List, { List as ListModel } from "./List";
import ListItem from "./ListItem";
import { measure, runOnUI, useAnimatedRef } from "react-native-reanimated";

const list: ListModel = {
  name: "Dianteira",
  items: [
    { name: "Nathaniel Fitzgerald", points: "0" },
    { name: "Lawrence Fullter Fitzgerald", points: "1" },
    { name: "Jacob Mullins", points: "0" },
    { name: "Jesus Lewis", points: "1" },
    { name: "Johnny Marr", points: "0" },
  ],
};

const list2: ListModel = {
  name: "Traseira",
  items: [
    { name: "Nathaniel Fitzgerald", points: "$3.45" },
    { name: "Lawrence Fullter Fitzgerald", points: "$3.45" },
    { name: "Jacob Mullins", points: "$3.45" },
  ],
};

const list3: ListModel = {
  name: "Total Points",
  items: [
    { name: "Nathaniel Fitzgerald", points: "0" },
    { name: "Lawrence Fullter Fitzgerald", points: "1" },
  ],
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101828",
    // padding: 16,
    borderRadius: 5,
    marginBottom: 12,
  },
  content: {
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

export default function Accordion() {
  const viewRef = useAnimatedRef<View>();
  const [isOpen, setIsOpen] = useState(false);

  const handleOnActive = () => {
    setIsOpen((state) => !state);

    runOnUI(() => {
      "worklet";
      const isHeight = measure(viewRef)?.height;
      console.log(isHeight);
    })();

    // if (viewRef.current) {
    //   //   const {  } = viewRef.current.measure(
    //   //     (x, y, width, height, pageX, pageY) => {
    //   //       return { height };
    //   //     }
    //   //   );
    // }
  };

  const style = {
    height: isOpen ? "100%" : 1,
    opacity: isOpen ? 1 : 0,
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleOnActive}>
        <View style={styles.content}>
          <Text style={styles.title}>Dianteira</Text>
          <Feather
            name={isOpen ? "minus" : "plus"}
            size={20}
            color={isOpen ? "#FFF" : "#4D7ED7"}
          />
        </View>
      </TouchableWithoutFeedback>

      <View style={[styles.items, style]}>
        <View ref={viewRef}>
          {list.items.map((item, key) => (
            <ListItem
              key={key}
              isLast={key === list.items.length - 1}
              {...{ item }}
            />
          ))}
        </View>
      </View>
    </View>
  );
}
