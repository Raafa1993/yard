import React from "react";

import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";

import { Container, Title } from "./styles";

export function Users() {
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
            <View
              style={{
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Title>Meu perfil</Title>
            </View>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
