import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Cell, Row, Table, TableWrapper } from "react-native-table-component";
import { Container, Content } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const element = (data: any, index: any) => (
  <TouchableOpacity onPress={() => console.log("INDEX", index)}>
    <View
      style={{
        width: 58,
        height: 18,
        backgroundColor: "#78B7BB",
        borderRadius: 2,
      }}
    >
      <Text style={{ textAlign: "center", color: "#fff" }}>button</Text>
    </View>
  </TouchableOpacity>
);

export default function TableList() {
  const tablehead = ["Tipo", "IV", "BA", "A", "I"];
  const tableData = [
    ["1", "2", "3", "4"],
    ["a", "b", "c", "d"],
    ["1", "2", "3", "4"],
    ["a", "b", "c", "d"],
  ];
  return (
    <Container
      style={{
        backgroundColor: "#101828",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderColor: "#1D2939",
        height: 200,
      }}
    >
      <Table borderStyle={{ borderColor: "transparent" }}>
        <Row style={{ height: 40, backgroundColor: "#fff" }} data={tablehead} />
        {tableData.map((rowData, index) => (
          <TableWrapper
            key={index}
            style={{
              flexDirection: "row",
              backgroundColor: "#1D2939",
              height: 48,
            }}
          >
            {rowData.map((cellData, cellIndex) => (
              <Cell
                key={cellIndex}
                data={cellIndex === 3 ? element(cellData, index) : cellData}
                textStyle={{ textAlign: "center", color: "#fff" }}
              />
            ))}
          </TableWrapper>
        ))}
      </Table>
    </Container>
  );
}
