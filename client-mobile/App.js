import React, { useState } from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
import { Card } from "react-native-material-ui";
import { Button, Toolbar } from "react-native-material-ui";
import { COLOR, ThemeContext, getTheme } from "react-native-material-ui";

const uiTheme = {
  palette: {
    primaryColor: COLOR.teal500,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
  card: {
    container: {
      backgroundColor: COLOR.grey50,
    },
  },
};

export default function App() {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <ThemeContext.Provider value={getTheme(uiTheme)}>
      <Toolbar
        leftElement="menu"
        centerElement="Users"
        rightElement={{
          menu: {
            icon: "more-vert",
            labels: ["item 1", "item 2"],
          },
        }}
        onRightElementPress={(label) => {
          console.log(label);
        }}
      />
      <View style={styles.container}>
        <Picker
          selectedValue={selectedValue}
          style={styles.filter}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="All sites" value="site" />
          <Picker.Item label="site 1" value="site_1" />
          <Picker.Item label="site 2" value="site_2" />
        </Picker>
        <Picker
          selectedValue={selectedValue}
          style={styles.filter}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="All users" value="" />
          <Picker.Item label="loadman" value="loadman" />
          <Picker.Item label="hawker" value="hawker" />
        </Picker>
        <View style={styles.card}>
          <Text style={styles.itemTitle}>Load man</Text>
          <Text style={styles.item}>Name: Ankit Agrawal</Text>
          <Text style={styles.item}>Address: 3/11 Gugaon</Text>
          <Text style={styles.item}>Phone No.: 12345678</Text>
          <Text style={styles.item}>DOB: 2020-Dec-01</Text>
          <View style={styles.cardButtons}>
            <Button
              raised
              primary
              style={{ container: { flex: 1 } }}
              text="Edit"
            />
            <Button
              raised
              accent
              style={{ container: { flex: 1 } }}
              text="Delete"
            />
          </View>
        </View>
      </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filter: {
    flexDirection: "row",
  },
  itemTitle: {
    paddingVertical: 10,
    marginHorizontal: 10,
    fontSize: 25,
  },
  card: {
    flex: 1,
  },
  item: {
    fontSize: 17,
    marginVertical: 3,
    marginHorizontal: 20,
  },
  cardButtons: {
    flexDirection: "row",
    alignItems: "stretch",
    width: "100%",
  },
});
