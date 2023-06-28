import { PressableProps } from "react-native";
import { Feather } from "@expo/vector-icons";

import {
  Pressable,
  ViewContainer,
  ViewBox,
  ViewInfo,
  Text,
  ViewTextGroup,
  ViewGroup,
} from "./styles";

export type OrderProps = {
  id: string;
  codigo: string;
  placa: string;
  chassi: string;
  date: string;
  type: "remocao" | "vmc";
};

interface Props extends PressableProps {
  data: OrderProps;
}

export default function Order({ data, ...rest }: Props) {
  const statusColor = data.type === "remocao" ? "#FBA94C" : "#32D583";
  return (
    <Pressable
      {...rest}
      style={({ pressed }: any) => [{ opacity: pressed ? 0.6 : 1 }]}
    >
      <ViewContainer>
        <ViewBox statusColor={statusColor} />
        <ViewInfo>
          <ViewTextGroup>
            <Text>{`Código: ${data.codigo}`}</Text>
            <ViewGroup>
              <Feather name="calendar" size={16} /> {data.date}
            </ViewGroup>
          </ViewTextGroup>
          <Text>{`Placa: ${data.placa}`}</Text>
          <Text>{`Chassi: ${data.chassi}`}</Text>
        </ViewInfo>
      </ViewContainer>
    </Pressable>
  );
}
