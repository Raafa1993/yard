import React, { useState } from "react";

import Button from "../../components/Button";
import { useAuth } from "../../hooks/auth";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Switch,
  View,
} from "react-native";
import { Input } from "../../components/Input";

import { Feather } from "@expo/vector-icons";

import {
  Container,
  BackButton,
  Title,
  UserAvatarButton,
  SwitchContent,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useThemeStore } from "../../../store/theme";

export function Settings() {
  const { user } = useAuth();
  const { theme, toggleTheme } = useThemeStore();
  const toggleSwitch = () => toggleTheme(theme === "light" ? "dark" : "light");

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            {/* <BackButton onPress={() => navigation.navigate("home")}>
              <Feather name="chevron-left" color="#fff" size={24} />
            </BackButton> */}

            <View
              style={{
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <UserAvatarButton>
                <Feather name="user" color="#fff" size={40} />
              </UserAvatarButton>
              <Title>Meu perfil</Title>
            </View>

            <View>
              <SwitchContent>
                <Title>Tema</Title>

                <Switch
                  trackColor={{ false: "#767577", true: "#4D7ED7" }}
                  thumbColor={theme === "dark" ? "#fff" : "#f4f3f4"}
                  ios_backgroundColor={"#3e3e3e"}
                  onValueChange={toggleSwitch}
                  value={theme === "dark" ? false : true}
                />
              </SwitchContent>

              <Input
                autoCapitalize="words"
                icon="user"
                placeholder="Nome"
                returnKeyType="next"
                value={user.name}
                editable={false}
              />

              <Input
                secureTextEntry
                icon="lock"
                placeholder="Senha atual"
                textContentType="newPassword"
                returnKeyType="next"
                editable={false}
                style={{ opacity: 0.2 }}
              />
              <Input
                secureTextEntry
                icon="lock"
                placeholder="Nova senha"
                textContentType="newPassword"
                returnKeyType="next"
                editable={false}
                style={{ opacity: 0.2 }}
              />
              <Input
                secureTextEntry
                icon="lock"
                placeholder="Confirmar nova senha"
                textContentType="newPassword"
                returnKeyType="send"
                editable={false}
                style={{ opacity: 0.2 }}
              />

              <Button
                text="Confirmar mudanças"
                disabled
                style={{ opacity: 0.2 }}
              />
            </View>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
