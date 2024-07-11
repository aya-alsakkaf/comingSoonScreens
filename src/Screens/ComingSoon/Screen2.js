import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import NextButton from "../../Components/NextButton";
import { NAVIGATION } from "../../Navigation/Index";

const Screen2 = () => {
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
          color: "#F4800B",
          fontFamily: "Amiri-Bold",
        }}
      >
        شلون العب برر مقوفك؟
      </Text>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          fontFamily: "Amiri-Regular",
        }}
      >
        رح تلعب مع فريق مكون من ٣ اشخاص على الاقل
      </Text>
      <Image
        source={require("../../assets/images/comingSoon/Team goals pana.png")}
        style={{
          width: 318,
          height: 318,
        }}
      />

      <NextButton
        onPressAction={() => {
          navigation.navigate(NAVIGATION.COMINGSOON.SCREEN3);
        }}
      />
    </View>
  );
};

export default Screen2;
