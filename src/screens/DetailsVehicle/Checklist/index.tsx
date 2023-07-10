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

        {/* <Accordion title="Dianteira">
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
        </Accordion> */}

        <Accordion title="Traseira" data={listTable} />
        {/* {listTable.map((row) => (
            <View
              key={row.titulo}
              style={{
                backgroundColor: "#101828",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 8,
                paddingHorizontal: 16,
                borderBottomWidth: 1,
                borderColor: "#1D2939",
                height: 54,
              }}
            >
              <Text style={{ color: "#fff" }}>{row.titulo}</Text>
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <CheckBox
                  direction="row"
                  multiple={false}
                  options={row.checkboxes.map((check) => ({
                    ...check,
                    label: "",
                  }))}
                  onChange={(e) => console.log("CHECK", e)}
                  // isDisabled
                />
              </View>
            </View>
          ))}
        </Accordion> */}
      </ScrollView>
    </Container>
  );
}
