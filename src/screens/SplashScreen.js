import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { fetchData } from "../../api";
import CountryListing from "./CountryListing";
import Card from "../../components/Card";

const SplashScreen = () => {
  const [countryData, setCountry] = useState("Switzerland");
  const [data, setData] = useState([]);

  const handleCountryChange = async (country) => {
    console.log("country", country);
    let countryDefault = country ? country : "Thailand";
    const covidData = await fetchData(countryDefault);
    setData(covidData[covidData.length - 1]);
  };
  return (
    <View style={styles.Container}>
      <Text style={styles.title}>ติดตาม COVID-19 ทั่วโลก</Text>

      <CountryListing handleCountryChange={handleCountryChange} />
      <ScrollView
        style={{ marginTop: 50 }}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        <Card ico="md-pulse" title="เฝ้าระวัง" bg="red" item={data.Active} />
        <Card
          ico="ios-git-network"
          title="ยืนยันแล้ว"
          bg="#FFF"
          item={data.Confirmed}
        />
        <Card
          ico="ios-heart-dislike"
          title="เสียชีวิต"
          bg="#FFF"
          item={data.Deaths}
        />
        <Card
          ico="ios-heart"
          title="รักษาหาย"
          bg="#FFF"
          item={data.Recovered}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
      paddingTop:30,
    fontSize: 20,
    fontWeight: "700",
    color:'black'
  },
});

export default SplashScreen;
