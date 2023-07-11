import React from "react";
import { ListItem as ListProps } from "../../../components/Accordion/ListItem";
import Accordion from "../../../components/Accordion";

import {
  Container,
  ScrollView,
  ViewCardInfo,
  ViewInfo,
  TextInfoTitle,
  TextInfoDescription,
} from "./styles";
export interface List {
  name: string;
  items: ListProps[];
}
interface CheckboxValues {
  id: number;
  label: string;
}
interface TabelaItem {
  titulo: string;
  descricao: string;
  checkboxes: CheckboxValues[];
}

const listTable: TabelaItem[] = [
  {
    titulo: "Item 1",
    descricao: "Descrição do item 1",
    checkboxes: [
      {
        id: 1,
        label: "IV",
      },
      {
        id: 2,
        label: "BA",
      },
      {
        id: 3,
        label: "A",
      },
      {
        id: 4,
        label: "I",
      },
    ],
  },
  {
    titulo: "Item 2",
    descricao: "Descrição do item 2",
    checkboxes: [
      {
        id: 1,
        label: "IV",
      },
      {
        id: 2,
        label: "BA",
      },
      {
        id: 3,
        label: "A",
      },
      {
        id: 4,
        label: "I",
      },
    ],
  },
  {
    titulo: "Item 3",
    descricao: "Descrição do item 3",
    checkboxes: [
      {
        id: 1,
        label: "IV",
      },
      {
        id: 2,
        label: "BA",
      },
      {
        id: 3,
        label: "A",
      },
      {
        id: 4,
        label: "I",
      },
    ],
  },
];

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

        <Accordion title="Traseira" data={listTable} />
        <Accordion title="Dianteira" data={listTable} />
        <Accordion title="Farol" data={listTable} />
      </ScrollView>
    </Container>
  );
}
