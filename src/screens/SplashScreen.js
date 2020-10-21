import React, {  useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { fetchData } from "../../api";
import CountryListing from "./CountryListing";
import Card from "../../components/Card";
import Buttons from "../../components/Buttons";

const SplashScreen = ( props ) => {
  const [countryData,setCountry] = useState('');
  const [data, setData] = useState([]);

  const handleCountryChange = async (country) => {
    let countryDefault = country ? country : "Thailand";
    setCountry(countryDefault);
    const covidData = await fetchData(countryDefault);
    setData(covidData[covidData.length - 1]);
  };

  const renderData = data ?(
    <React.Fragment>
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
      <Card ico="ios-heart" title="รักษาหาย" bg="#FFF" item={data.Recovered} />
    </React.Fragment>
  ): <Text style={{color:'white', fontSize: 30}}>ไม่มีข้อมูลแสดง</Text>;
  return (
    <View style={styles.Container}>
      <View style={{paddingVertical:30}}>
        <Text style={styles.title}>ติดตาม COVID-19</Text>
      </View>
 
      <CountryListing handleCountryChange={handleCountryChange} />
      <ScrollView
        style={{ marginTop: 50 }}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {renderData}
      </ScrollView>
      <View style={{ marginBottom: 34 }}>
        <Buttons
          name="ดูกราฟ"
          bg="red"
          onPress={() => props.navigation.navigate("Detail",{countryData})}
        />
        <Buttons name="การเฝ้าระวัง" bg="green"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#232f34"
  },
  title: {
      paddingTop:30,
    fontSize: 20,
    fontWeight: "700",
    color:'white'
  },
});

export default SplashScreen;
