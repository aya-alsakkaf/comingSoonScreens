import { Text, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import NextButton from "../../Components/NextButton";
import { NAVIGATION } from "../../Navigation/Index";

const Screen5 = () => {
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
        انا برا السالفة، شسوي؟
      </Text>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          fontFamily: "Amiri-Regular",
        }}
      >
        اذا انت برا السالفة حاول تعرف شسالفة بالضبط من كلام البقية او اقنعهم
        يصوتون للشخص الخطأ{" "}
      </Text>
      <Image
        source={require("../../assets/images/comingSoon/Rafiki Dark Alley.png")}
        style={{
          width: 318,
          height: 318,
        }}
      />

      <NextButton
        onPressAction={() => {
          navigation.navigate(NAVIGATION.COMINGSOON.SCREEN6);
        }}
      />
    </View>
  );
};

export default Screen5;
