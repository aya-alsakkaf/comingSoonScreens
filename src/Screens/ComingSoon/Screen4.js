import { Text, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import NextButton from "../../Components/NextButton";
import { NAVIGATION } from "../../Navigation/Index";

const Screen4 = () => {
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
          fontFamily: "Amiri-Bold",
        }}
      >
        انا داخل السالفة، شسوي؟{" "}
      </Text>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          fontFamily: "Amiri-Regular",
        }}
      >
        اذا انت داخل السالفة، رح تسأل اللي معاك اسألة و تحاول تعرف منو فيكم برا
        السالفة{" "}
      </Text>
      <Image
        source={require("../../assets/images/comingSoon/Pana Style People Search.png")}
        style={{
          width: 318,
          height: 318,
        }}
      />

      <NextButton
        onPressAction={() => {
          navigation.navigate(NAVIGATION.COMINGSOON.SCREEN5);
        }}
      />
    </View>
  );
};

export default Screen4;
