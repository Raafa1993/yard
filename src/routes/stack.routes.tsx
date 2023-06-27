import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabRoutes from "./tab.routes";
import { Profile } from "../screens/Profile";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="initial" component={TabRoutes} />
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
}
