import { Image, Text, View } from "react-native";
import React from "react";
import NextButton from "../../Components/NextButton";
import { useNavigation } from "@react-navigation/native";
import { NAVIGATION } from "../../Navigation/Index";

const Screen1 = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "white",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontFamily: "Amiri-Regular",
        }}
      >
        برر موقفك
      </Text>
      <Image
        source={require("../../assets/images/comingSoon/Mansplaining-bro.png")}
        style={{
          width: 318,
          height: 318,
        }}
      />

      <NextButton
        onPressAction={() => {
          navigation.navigate(NAVIGATION.COMINGSOON.SCREEN2);
        }}
      />
    </View>
  );
};

export default Screen1;
