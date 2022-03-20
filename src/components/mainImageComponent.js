import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const MainImageShow = () => {
  let headerText = " \n Penerbangan\n impianmu ";
  return (
    <View>
      <Image
        style={style.imageStyle}
        source={require("../assets/airPort4.png")}
      />
      <Text style={style.textStyle}>{headerText}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  imageStyle: {
    resizeMode: "contain",
    width: wp("100%"),
    height: hp("20%"),
    marginTop: 10,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#F5FFF5",
    marginLeft: 10,
  },
});
export default MainImageShow;
