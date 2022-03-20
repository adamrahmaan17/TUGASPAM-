import React from "react";
import { StyleSheet, View, Text } from "react-native";
import SelectFlightCard from "./selectFlightCard";

const SelectPathStack = () => {
  return (
    <View style={style.mainViewStyle}>
      <SelectFlightCard
        iconName="flight-takeoff"
        title="dari"
        location="Kuala lumpur, Malaysia"
        disable={false}
      />
      <SelectFlightCard
        iconName="flight-land"
        title="ke"
        location="Jakarta, Indonesia"
        disable={true}
      />
    </View>
  );
};

const style = StyleSheet.create({
  mainViewStyle: {
    marginTop: 20,
  },
});

export default SelectPathStack;
