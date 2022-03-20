import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FlightBookingLandingScreen from "./src/screens/FlightBookingLandingScreen";
import ConfirmFlightBooking from "./src/screens/ConfirmFlightBooking";

const Stack = createStackNavigator();
const MainAppScreens = () => {
  const MyTheme = {
    dark: true,
    colors: {
      primary: "#38CF4E",
      background: "#0A1B7A",
      card: "#F6F7FA",
      text: "#CCC731",
      border: "#f8f8f8",
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Bingo Book">
        <Stack.Screen
          name="TERBANGIN"
          component={FlightBookingLandingScreen}
        />
        <Stack.Screen name="konfirmasi" component={ConfirmFlightBooking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainAppScreens;
