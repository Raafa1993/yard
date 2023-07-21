import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "../../../hooks/toast";

import Button from "../../../components/Button";
import { Header } from "../../../components/Header";
import { ControlledInputDate } from "../../../components/ControlledInputDate";
import { ControlledSelect } from "../../../components/ControlledSelect";
import { ControlledInput } from "../../../components/ControlledInput";

import { Container } from "./styles";
import ButtonIcon from "../../../components/ButtonIcon";

const regexPlacaPadrao = /^[A-Z]{3}\d{4}$/;
const regexPlacaMercosul = /^[a-zA-Z]{3}[0-9][A-Za-z0-9][0-9]{2}/;

const createSignInFormSchema = z.object({
  placa: z
    .string()
    .regex(regexPlacaMercosul || regexPlacaPadrao, "Digite uma placa valida!")
    .nonempty("A Placa é obrigatório!"),
  chassi: z.string().nonempty("O Chassi é obrigatório!"),
  marca: z.string().nonempty("A Marca é obrigatório!"),
  modelo: z.string().nonempty("O Modelo é obrigatório!"),
  anoFabricacao: z.date().max(new Date(), "Selecione data Valida!"),
  anoModelo: z.date(),
});

type CreatedUserFormData = z.infer<typeof createSignInFormSchema>;

export function RegisterPartial() {
  const { addToast } = useToast();
  const { navigate } = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatedUserFormData>({
    resolver: zodResolver(createSignInFormSchema),
    defaultValues: {
      anoFabricacao: new Date(),
      anoModelo: new Date(),
      chassi: "",
      placa: "",
      marca: "",
      modelo: "",
    },
    mode: "all",
    criteriaMode: "all",
  });

  async function handleOnSignIn(data: CreatedUserFormData) {
    console.log("FORM", data);

    addToast({
      title: "Atenção",
      description: "Cadastro concluido com sucesso!",
      type: "success",
    });
  }
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: "#1D2939" }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <ScrollView keyboardShouldPersistTaps="handled">
          <Container>
            <ControlledInput
              name="placa"
              placeholder="Digite aqui..."
              label="Placa do Veiculo"
              control={control}
              error={errors.placa}
              style={{ textTransform: "uppercase" }}
            />

            <ControlledInput
              name="chassi"
              placeholder="Digite aqui..."
              label="Chassi"
              control={control}
              error={errors.chassi}
              iconRight={
                <ButtonIcon
                  icon="search"
                  size="sm"
                  style={{ height: "100%" }}
                />
              }
            />

            <ControlledSelect
              name="marca"
              control={control}
              options={[
                { label: "Selecione o patio", value: "" },
                {
                  label: "Honda",
                  value: "Honda",
                },
                {
                  label: "Chevrolet",
                  value: "chevrolet",
                },
              ]}
              error={errors.marca}
              label="Marca"
            />

            <ControlledSelect
              name="modelo"
              control={control}
              options={[
                { label: "Selecione o patio", value: "" },
                {
                  label: "Honda Fit",
                  value: "Honda Fit",
                },
                {
                  label: "HRV",
                  value: "HRV",
                },
              ]}
              error={errors.modelo}
              label="Modelo"
            />

            <View
              style={{
                flexDirection: "row",
                gap: 12,
                flex: 1,
              }}
            >
              <View style={{ flex: 1 }}>
                <ControlledInputDate
                  name="anoFabricacao"
                  control={control}
                  error={errors.anoFabricacao}
                  label="Ano Fabricação"
                />
              </View>

              <View style={{ flex: 1 }}>
                <ControlledInputDate
                  name="anoModelo"
                  control={control}
                  error={errors.anoModelo}
                  label="Ano Modelo"
                />
              </View>
            </View>

            <View style={{ gap: 12, marginTop: 12 }}>
              <Button text="Cadastrar" onPress={handleSubmit(handleOnSignIn)} />
            </View>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
