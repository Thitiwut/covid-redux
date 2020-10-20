import React from "react";
import { View, StyleSheet } from "react-native";
import SplashScreen from "./src/screens/SplashScreen";
import CountryListing from "./src/screens/CountryListing";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();



export default function App() {
  return (
    <View style={styles.Container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    display: "flex",
    flex: 1,
  },
});
