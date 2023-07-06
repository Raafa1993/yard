import React from "react";
import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

import Animated, { useAnimatedStyle } from "react-native-reanimated";

const size = 30;
const styles = StyleSheet.create({
  container: {
    height: size,
    width: size,
    borderRadius: size / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#525251",
  },
});

interface ChevronProps {
  progress: Animated.SharedValue<number>;
}

const Chevron = ({ progress }: ChevronProps) => {
  const style = useAnimatedStyle(() => ({
    backgroundColor: "#525251",
    transform: [{ rotateZ: `${(progress.value, 0, Math.PI)}rad` }],
  }));
  return (
    <Animated.View style={[styles.container, style]}>
      <Feather name="chevron-up" />
    </Animated.View>
  );
};

export default Chevron;
