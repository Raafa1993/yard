import React from "react";

import Button from "../../components/Button";
import { useAuth } from "../../hooks/auth";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { Input } from "../../components/Input";

import { Feather } from "@expo/vector-icons";

import {
  Container,
  BackButton,
  Title,
  UserAvatarButton,
  UserAvatar,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Settings() {
  const { signOut, user } = useAuth();
  const navigation = useNavigation();

  const handleOnLogout = () => {
    signOut();
  };

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
            <BackButton onPress={() => navigation.navigate("home")}>
              <Feather name="chevron-left" color="#fff" size={24} />
            </BackButton>

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
