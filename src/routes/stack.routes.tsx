import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabRoutes from "./tab.routes";
import { Details } from "../screens/Details";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="initial" component={TabRoutes} />
      <Stack.Screen name="details" component={Details} />
    </Stack.Navigator>
  );
}
