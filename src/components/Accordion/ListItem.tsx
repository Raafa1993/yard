import React from "react";
import { StyleSheet, View } from "react-native";
import CheckBox from "../CheckBox";
import { TextRow } from "./styles";
import { useThemeStore } from "../../../store/theme";

const LIST_ITEM_HEIGHT = 54;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
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
  const { theme } = useThemeStore();
  const bottomRadius = isLast ? 5 : 0;
  return (
    <View
      style={[
        styles.container,
        {
          borderBottomLeftRadius: bottomRadius,
          borderBottomRightRadius: bottomRadius,
          backgroundColor: theme === "dark" ? "#101828" : "#F2F4F7",
          borderColor: theme === "dark" ? "#1D2939" : "#98A2B3",
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
