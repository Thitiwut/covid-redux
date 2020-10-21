import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-community/picker";
import { fetchCountries } from "../../api";

const CountryListing = ({ handleCountryChange }) => {
  const [countries, setCountry] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  const countryChangeHandler = (value, index) => {
    setSelectedValue(value);
    handleCountryChange(value);
  };
  useEffect(() => {
    const fetchAPI = async () => {
      setCountry(await fetchCountries());
    };
    fetchAPI();
  }, []);

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 200 ,paddingTop:30}}
        onValueChange={(itemValue) => countryChangeHandler(itemValue)}
        itemStyle={{
          backgroundColor: "grey",
          color: "black",
          fontSize: 17,
        }}
      >
        {countries.map((item, key) => (
          <Picker.Item key={key} label={item.Country} value={item.Country} color="white" />
        ))}
      </Picker>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 4
  },
});

export default CountryListing;
