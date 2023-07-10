import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CheckBox from "../CheckBox";

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
  item: any;
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
      <Text style={styles.name}>{item.titulo}</Text>
      <View style={{ alignItems: "center", gap: 8, flexDirection: "row" }}>
        <CheckBox
          direction="row"
          multiple={false}
          options={item.checkboxes.map((check: any) => ({
            ...check,
            label: "",
          }))}
          onChange={(e) => console.log("CHECK", e)}
          // isDisabled
        />
      </View>
    </View>
  );
};

export default ListItem;
