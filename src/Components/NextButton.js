import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const NextButton = ({ onPressAction }) => {
  return (
    <Pressable
      style={{
        backgroundColor: "#B93C4E",
        width: 200,
        height: 74,
        borderRadius: 21,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPressAction}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
          fontFamily: "Amiri-Regular",
        }}
      >
        التالي
      </Text>
    </Pressable>
  );
};

export default NextButton;

const styles = StyleSheet.create({});
