import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./stack.routes";
import AuthRoutes from "./auth.routes";
import { useAuth } from "../hooks/auth";

export default function Routes() {
  const { user, loading } = useAuth();

  console.log(user);

  return (
    <NavigationContainer>
      {user ? <StackRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
