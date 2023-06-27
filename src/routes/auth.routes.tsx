import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../screens/SignIn";

const Auth = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        statusBarColor: "translucent",
      }}
    >
      <Auth.Screen name="SignIn" component={SignIn} />
    </Auth.Navigator>
  );
}
