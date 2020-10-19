import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../config/Colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const CountryListing = ({ navigation }) => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.covid19api.com/countries")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => console.log("Finished"));
  }, []);

  const renderItem = ({ item }) => <Item item={item} />;

  const Item = ({ item }) => (
    <TouchableOpacity
      onPress={() => gotoCases(item)}
      style={styles.countryItem}
    >
      <Text style={styles.countryText}>{item.Country}</Text>
      <FontAwesome5 size={20} color={Colors.secondary} name={"arrow-right"} />
    </TouchableOpacity>
  );

  function gotoCases(item) {
    navigation.navigate("CasesByDate", { Slug: item.Slug });
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        keyExtractor={(index) => {
          index.toString();
        }}
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
  countryItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.primary,
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  countryText: {
    fontSize: 20,
    color: Colors.secondary,
  },
});

export default CountryListing;
