import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Screen6 = () => {
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
    </View>
  );
};

export default Screen6;

const styles = StyleSheet.create({});
