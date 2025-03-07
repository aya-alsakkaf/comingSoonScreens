import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const NextButton = ({ onPressAction, home }) => {
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
          fontSize: 30,
          fontFamily: "Amiri-Regular",
        }}
      >
        {home ? "خل نلعب" : "التالي"}
      </Text>
    </Pressable>
  );
};

export default NextButton;

const styles = StyleSheet.create({});
