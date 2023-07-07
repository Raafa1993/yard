import React from "react";
import ListItem, {
  ListItem as ListProps,
} from "../../../components/Accordion/ListItem";
import Accordion from "../../../components/Accordion";

import {
  Container,
  ScrollView,
  ViewCardInfo,
  ViewInfo,
  TextInfoTitle,
  TextInfoDescription,
} from "./styles";
import { Text, View } from "react-native";
import CheckBox from "../../../components/CheckBox";
export interface List {
  name: string;
  items: ListProps[];
}

const list: List = {
  name: "Dianteira",
  items: [
    { name: "Nathaniel Fitzgerald", points: "0" },
    { name: "Lawrence Fullter Fitzgerald", points: "1" },
    { name: "Jacob Mullins", points: "0" },
    { name: "Jesus Lewis", points: "1" },
    { name: "Johnny Marr", points: "0" },
  ],
};

interface CheckboxValues {
  iv: boolean;
  ba: boolean;
  a: boolean;
  i: boolean;
}

interface TabelaItem {
  titulo: string;
  descricao: string;
  checkboxes: CheckboxValues;
}

const listTable: TabelaItem[] = [
  {
    titulo: "Item 1",
    descricao: "Descrição do item 1",
    checkboxes: {
      iv: false,
      ba: true,
      a: false,
      i: true,
    },
  },
  {
    titulo: "Item 2",
    descricao: "Descrição do item 2",
    checkboxes: {
      iv: true,
      ba: true,
      a: false,
      i: false,
    },
  },
  {
    titulo: "Item 3",
    descricao: "Descrição do item 3",
    checkboxes: {
      iv: true,
      ba: false,
      a: true,
      i: true,
    },
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

        <Accordion title="Dianteira">
          {list.items.map((item, key) => (
            <ListItem
              key={key}
              isLast={key === list.items.length - 1}
              {...{ item }}
            />
          ))}
        </Accordion>

        <Accordion title="Dianteira">
          {list.items.map((item, key) => (
            <ListItem
              key={key}
              isLast={key === list.items.length - 1}
              {...{ item }}
            />
          ))}
        </Accordion>

        <Accordion title="Traseira">
          {listTable.map((row) => (
            <View
              key={row.titulo}
              style={{
                width: "100%",
                height: 54,
                padding: 14,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: "#fff" }}>{row.titulo}</Text>
              <View style={{ alignItems: "center", flexDirection: "row" }}>
                <CheckBox
                  direction="row"
                  multiple
                  options={[
                    { id: 1, label: "" },
                    { id: 2, label: "" },
                    { id: 3, label: "" },
                    { id: 4, label: "" },
                  ]}
                  onChange={(e) => console.log("CHECK", e)}
                />
              </View>
            </View>
          ))}
        </Accordion>
      </ScrollView>
    </Container>
  );
}
