import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NextButton from "./NextButton";

const GiveTo = ({ name, onPressAction }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        padding: 10,
        alignItems: "center",
        gap: 20,
        justifyContent: "space-around",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          color: "#F4800B",
          fontFamily: "Amiri-Bold",
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          fontFamily: "Amiri-Regular",
        }}
      >
        اعطوا الجوال {name} اضغط التالي حتى تعرف هل انت برا السالفة او داخلها
        ولا تخلي احد غيرك يشوف الشاشة
      </Text>

      <NextButton onPressAction={onPressAction} />
    </View>
  );
};

export default GiveTo;

const styles = StyleSheet.create({});
