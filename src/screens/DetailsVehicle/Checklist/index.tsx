import React from "react";

import {
  Container,
  ScrollView,
  ViewCardInfo,
  ViewInfo,
  TextInfoTitle,
  TextInfoDescription,
} from "./styles";
import Accordion from "../../../components/Accordion";

export default function Checklist() {
  return (
    <Container>
      <ScrollView>
        <ViewCardInfo>
          <ViewInfo>
            <TextInfoTitle>Legenda</TextInfoTitle>
            <TextInfoDescription>123123154</TextInfoDescription>
          </ViewInfo>
        </ViewCardInfo>

        <Accordion />
        <Accordion />
      </ScrollView>
    </Container>
  );
}
