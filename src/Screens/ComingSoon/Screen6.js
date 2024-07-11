import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import NextButton from "../../Components/NextButton";
import { useNavigation } from "@react-navigation/native";
import { NAVIGATION } from "../../Navigation/Index";

const Screen6 = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "white",
        padding: 10,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          color: "#F4800B",
          fontFamily: "Amiri-Regular",
        }}
      >
        تقربوا برر موقفك!!!{" "}
      </Text>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          fontFamily: "Amiri-Bold",
        }}
      >
        قريباً
      </Text>
      <Image
        source={require("../../assets/images/comingSoon/Re-opening Shops Bro.png")}
        style={{
          width: 318,
          height: 318,
        }}
      />

      <NextButton
        home={true}
        onPressAction={() =>
          navigation.navigate(NAVIGATION.GAMESCREEN.CATEGORIES)
        }
      />
    </View>
  );
};

export default Screen6;

const styles = StyleSheet.create({});
