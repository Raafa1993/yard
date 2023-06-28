import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ThemeProps = "dark" | "light";

type StoreProps = {
  theme: ThemeProps;
  toggleTheme: (theme: ThemeProps) => void;
};

const getInitialTheme = async (): Promise<ThemeProps | null> => {
  try {
    const theme = await AsyncStorage.getItem("theme");
    return theme as ThemeProps;
  } catch (error) {
    console.error("Error getting initial theme:", error);
    return null;
  }
};

export const useThemeStore = create<StoreProps>((set) => ({
  theme: "light",
  toggleTheme: async (theme) => {
    try {
      await AsyncStorage.setItem("theme", theme);
      set(() => ({
        theme: theme,
      }));
    } catch (error) {
      console.error("Error setting theme:", error);
    }
  },
}));

getInitialTheme().then((initialTheme) => {
  if (initialTheme) {
    useThemeStore.setState({ theme: initialTheme });
  }
});
