import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.title}>COVID-19 CASES APP</Text>
      <Button
        title="Goto Countries"
        onPress={() => {
          navigation.navigate("CountryListing");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
});

export default SplashScreen;
