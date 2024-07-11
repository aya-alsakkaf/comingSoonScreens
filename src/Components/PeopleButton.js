import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const PeopleButton = ({ onPressAction, name }) => {
  return (
    <Pressable
      style={{
        backgroundColor: "#177E86",
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
        {name}
      </Text>
    </Pressable>
  );
};

export default PeopleButton;

const styles = StyleSheet.create({});
