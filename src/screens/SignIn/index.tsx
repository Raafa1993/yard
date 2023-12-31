import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import Button from "../../components/Button";
import { ControlledInput } from "../../components/ControlledInput";
import logoImg from "../../assets/logo.png";

import { Container, ForgotPassword, ForgotPasswordText, Title } from "./styles";
import { useAuth } from "../../hooks/auth";
import { ControlledSelect } from "../../components/ControlledSelect";
import { useToast } from "../../hooks/toast";

const createSignInFormSchema = z.object({
  name: z.string().nonempty("O usuário é obrigatório"),
  password: z.string().min(6, "A senha precisa de no minimo 6 caracteres"),
  patio: z.string().nonempty("O patio é obrigatório"),
});

type CreatedUserFormData = z.infer<typeof createSignInFormSchema>;

export function SignIn() {
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatedUserFormData>({
    resolver: zodResolver(createSignInFormSchema),
    defaultValues: {
      name: "",
      password: "",
      patio: "",
    },
    mode: "all",
    criteriaMode: "all",
  });

  async function handleOnSignIn(data: CreatedUserFormData) {
    // setOutput(JSON.stringify(data, null, 2));
    console.log("FORMDATA", data);
    try {
      await signIn({
        name: data.name,
        password: data.password,
        patio: data.patio,
      });
    } catch (error: any) {
      console.log(error);
      addToast({
        title: "Atenção",
        description: error,
        type: "warning",
      });
    }
  }

  return (
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
          <Image source={logoImg} />

          <View>
            <Title>Faça seu Login</Title>
          </View>

          <View style={{ width: "100%" }}>
            <ControlledInput
              name="name"
              control={control}
              icon="user"
              placeholder="Usuário"
              autoCapitalize="none"
              error={errors.name}
            />

            <ControlledInput
              name="password"
              control={control}
              icon="lock"
              placeholder="Senha"
              secureTextEntry
              error={errors.password}
            />

            <ControlledSelect
              name="patio"
              control={control}
              placeholder="Selecione uma opção"
              error={errors.patio}
              options={[
                { label: "Selecione o patio", value: "" },
                { label: "Patio Osasco", value: "osasco" },
                { label: "Patio Itaqua", value: "itaqua" },
              ]}
            />

            <Button
              style={{ marginTop: 22 }}
              onPress={handleSubmit(handleOnSignIn)}
              text="Entrar"
            />
          </View>

          <ForgotPassword>
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </ForgotPassword>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
