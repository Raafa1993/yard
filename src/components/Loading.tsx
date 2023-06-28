import { ActivityIndicator, View } from "react-native";

export function Loading() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1D2939",
      }}
    >
      <ActivityIndicator color="#4D7ED7" size={32} />
    </View>
  );
}
