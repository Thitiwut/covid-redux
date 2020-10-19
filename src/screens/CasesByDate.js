import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../config/Colors";
const CasesByDate = ({ route, navigation }) => {
  const [Data, setData] = useState([]);

  const { Slug } = route.params;
  useEffect(() => {
    fetch(
      "https://api.covid19api.com/dayone/country/" + Slug + "/status/confirmed"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => console.log("Finished"));
  }, []);

  const renderItem = ({ item }) => <Item item={item} />;

  const Item = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.title}>
        {new Date(item.Date).getDate() +
          "-" +
          new Date(item.Date).getMonth() +
          "-" +
          new Date(item.Date).getFullYear()}
      </Text>
      <Text style={styles.title}>{item.Cases}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(index) => {
          index.toString();
        }}
        data={Data}
        renderItem={renderItem}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.primary,
    padding: 15,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  title: {
    color: colors.secondary,
    fontSize: 18,
  },
});

export default CasesByDate;
