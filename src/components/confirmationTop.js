import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialIcons } from "@expo/vector-icons";

const ConfirmationTop = () => {
  let takeOff = "KUL";
  let land = "CGK";
  let takOffLocation = "KL, malaysia";
  let landLocation = "IDN ,Jakarta";
  return (
    <View style={style.mainViewStyle}>
      <View style={style.locationSetStyle}>
        <MaterialIcons name="flight-takeoff" size={24} color="white" />
        <Text style={style.textStyle1}>{takeOff}</Text>
        <Text style={style.textStyleMin}>{takOffLocation}</Text>
      </View>

      <Image
        style={style.imageStyle}
        source={require("../assets/airPort4.png")}
      />

      <View style={style.locationSetStyle}>
        <MaterialIcons
          name="flight-land"
          size={24}
          color="white"
          style={style.iconStyle}
        />
        <Text style={style.textStyle2}>{land}</Text>
        <Text style={style.textStyleMin}>{landLocation}</Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  iconStyle: {
    alignSelf: "flex-end",
    marginRight: 10,
  },
  imageStyle: {
    resizeMode: "contain",
    width: wp("40%"),
    height: hp("20%"),
  },
  textStyle1: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#ffff",
    alignSelf: "flex-start",
  },
  textStyle2: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#ffff",
    marginRight: 10,
    alignSelf: "flex-end",
  },
  mainViewStyle: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
  },
  textStyleMin: {
    fontWeight: "500",
    fontSize: 15,
    color: "#ffff",
    
  },
  locationSetStyle: {
    alignSelf: "flex-end",
    marginLeft: 15,
  },
});
export default ConfirmationTop;
