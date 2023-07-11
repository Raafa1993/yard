import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CheckBox from "../CheckBox";
import { TextRow } from "./styles";

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
      <TextRow>{item.titulo}</TextRow>
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
