import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LIST_ITEM_HEIGHT = 54;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101828",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#1D2939",
    height: LIST_ITEM_HEIGHT,
  },
  name: {
    fontSize: 16,
    color: "#D0D5DD",
  },
  pointsContainerActive: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    backgroundColor: "#4D7ED7",
    width: 28,
    height: 28,
  },
  pointsContainerInactive: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    backgroundColor: "#475467",
    width: 28,
    height: 28,
  },
  points: {
    color: "white",
    fontWeight: "bold",
  },
});

export interface ListItem {
  name: string;
  points: string;
}

interface ListItemProps {
  item: ListItem;
  isLast: boolean;
}

const ListItem = ({ item, isLast }: ListItemProps) => {
  const bottomRadius = isLast ? 8 : 0;
  return (
    <View
      style={[
        styles.container,
        {
          borderBottomLeftRadius: bottomRadius,
          borderBottomRightRadius: bottomRadius,
        },
      ]}
    >
      <Text style={styles.name}>{item.name}</Text>
      <View style={{ alignItems: "center", gap: 8, flexDirection: "row" }}>
        <View
          style={
            item.points === "1"
              ? styles.pointsContainerActive
              : styles.pointsContainerInactive
          }
        >
          <Text style={styles.points}>{item.points}</Text>
        </View>
        <View
          style={
            item.points === "1"
              ? styles.pointsContainerActive
              : styles.pointsContainerInactive
          }
        >
          <Text style={styles.points}>{item.points}</Text>
        </View>
        <View
          style={
            item.points === "1"
              ? styles.pointsContainerInactive
              : styles.pointsContainerActive
          }
        >
          <Text style={styles.points}>{item.points}</Text>
        </View>
      </View>
    </View>
  );
};

export default ListItem;
