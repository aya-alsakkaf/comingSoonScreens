import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PeopleButton from "../Components/PeopleButton";
import { useNavigation } from "@react-navigation/native";
import { NAVIGATION } from "../Navigation/Index";
import NextButton from "../Components/NextButton";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "space-around",
      }}
    >
      <Text
        style={{
          fontSize: 50,
          fontFamily: "Amiri-Regular",
          color: "#F4800B",
        }}
      >
        برر موقفك
      </Text>
      <PeopleButton
        name="شلون العب"
        onPressAction={() => navigation.navigate(NAVIGATION.COMINGSOON.SCREEN1)}
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

export default HomeScreen;

const styles = StyleSheet.create({});
