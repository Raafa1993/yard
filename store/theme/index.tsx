import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from 'zustand/middleware'

type ThemeProps = "dark" | "light";

type StoreProps = {
  theme: ThemeProps;
  toggleTheme: (theme: ThemeProps) => void;
};


export const useThemeStore = create(persist<StoreProps>((set) => ({
  theme: "light",
  toggleTheme: (theme) => {
      set(() => ({
        theme: theme,
      }));
  },
}), {
  name: '@copartTheme',
  storage: createJSONStorage(() => AsyncStorage)
}));

