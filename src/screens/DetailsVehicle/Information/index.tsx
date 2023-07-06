import React from "react";

import {
  Container,
  ViewCardInfo,
  ViewInfo,
  TextInfoTitle,
  TextInfoDescription,
  ScrollView,
} from "./styles";
import Button from "../../../components/Button";

export default function Information({ route }: any) {
  const { orderId } = route.params;
  return (
    <Container>
      <ScrollView>
        <ViewCardInfo>
          <ViewInfo>
            <TextInfoTitle>Código</TextInfoTitle>
            <TextInfoDescription>{orderId}</TextInfoDescription>
          </ViewInfo>

          <ViewInfo>
            <TextInfoTitle>placa</TextInfoTitle>
            <TextInfoDescription>ABC-1234</TextInfoDescription>
          </ViewInfo>

          <ViewInfo>
            <TextInfoTitle>Chassi</TextInfoTitle>
            <TextInfoDescription>11dsa1d3sd54sad4sa5dsa46</TextInfoDescription>
          </ViewInfo>

          <ViewInfo>
            <TextInfoTitle>Código</TextInfoTitle>
            <TextInfoDescription>{orderId}</TextInfoDescription>
          </ViewInfo>

          <ViewInfo>
            <TextInfoTitle>placa</TextInfoTitle>
            <TextInfoDescription>ABC-1234</TextInfoDescription>
          </ViewInfo>

          <ViewInfo>
            <TextInfoTitle>Chassi</TextInfoTitle>
            <TextInfoDescription>11dsa1d3sd54sad4sa5dsa46</TextInfoDescription>
          </ViewInfo>

          <ViewInfo>
            <TextInfoTitle>Código</TextInfoTitle>
            <TextInfoDescription>{orderId}</TextInfoDescription>
          </ViewInfo>

          <ViewInfo>
            <TextInfoTitle>placa</TextInfoTitle>
            <TextInfoDescription>ABC-1234</TextInfoDescription>
          </ViewInfo>

          <ViewInfo>
            <TextInfoTitle>Chassi</TextInfoTitle>
            <TextInfoDescription>11dsa1d3sd54sad4sa5dsa46</TextInfoDescription>
          </ViewInfo>

          <ViewInfo>
            <TextInfoTitle>Código</TextInfoTitle>
            <TextInfoDescription>{orderId}</TextInfoDescription>
          </ViewInfo>

          <ViewInfo>
            <TextInfoTitle>placa</TextInfoTitle>
            <TextInfoDescription>ABC-1234</TextInfoDescription>
          </ViewInfo>

          <ViewInfo>
            <TextInfoTitle>Chassi</TextInfoTitle>
            <TextInfoDescription>11dsa1d3sd54sad4sa5dsa46</TextInfoDescription>
          </ViewInfo>

          <ViewInfo>
            <TextInfoTitle>Código</TextInfoTitle>
            <TextInfoDescription>{orderId}</TextInfoDescription>
          </ViewInfo>

          <ViewInfo>
            <TextInfoTitle>placa</TextInfoTitle>
            <TextInfoDescription>ABC-1234</TextInfoDescription>
          </ViewInfo>

          <ViewInfo>
            <TextInfoTitle>Chassi</TextInfoTitle>
            <TextInfoDescription>11dsa1d3sd54sad4sa5dsa46</TextInfoDescription>
          </ViewInfo>
        </ViewCardInfo>
        <Button text="Confirmar Entrega" />
      </ScrollView>
    </Container>
  );
}
