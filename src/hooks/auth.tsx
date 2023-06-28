import React, {
  createContext,
  useCallback,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";
interface User {
  id: string;
  name: string;
}
interface SignInCredencials {
  name: string;
  password: string;
}
interface AuthState {
  user: User;
  token: string;
}
interface AuthContextData {
  user: User;
  loading: boolean;
  signIn(credencials: SignInCredencials): Promise<void>;
  signOut(): void;
}
interface TransactionsProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: TransactionsProviderProps) {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        "@Copart:token",
        "@Copart:user",
      ]);

      if (token[1] && user[1]) {
        api.defaults.headers.authorization = `Bearer ${token[1]}`;

        setData({ token: token[1], user: JSON.parse(user[1]) });
      }

      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({ name, password }: SignInCredencials) => {
    const formData = {
      username: name,
      password,
      version: "B QA",
    };

    const response = await api.post("logincopart", formData);
    const { userId, userName, accessToken } = response.data;

    const responseUser = {
      id: String(userId),
      name: userName,
    };

    await AsyncStorage.multiSet([
      ["@Copart:token", accessToken],
      ["@Copart:user", JSON.stringify(responseUser)],
    ]);

    api.defaults.headers.authorization = `Bearer ${accessToken}`;

    setData({
      token: accessToken,
      user: responseUser,
    });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(["@Copart:token", "@Copart:user"]);

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
