import SplashScreen from  "../src/screens/SplashScreen"
import CountryListing from "../src/screens/CountryListing";
import CasesByDate from "../src/screens/CasesByDate";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="countryList" component={CountryListing} />
        <Stack.Screen name="caseByDate" component={CasesByDate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
