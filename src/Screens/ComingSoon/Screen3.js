import { Text, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import NextButton from "../../Components/NextButton";
import { NAVIGATION } from "../../Navigation/Index";

const Screen3 = () => {
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
        وبعدين؟{" "}
      </Text>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          fontFamily: "Amiri-Regular",
        }}
      >
        كلكم{" "}
        <Text
          style={{
            fontSize: 30,
            color: "#177E86",
          }}
        >
          ماعدا شخص واحد
        </Text>{" "}
        رح يطلع له انه داخل السالفة مع السالفة اللي لازم تعرفونها
      </Text>
      <Image
        source={require("../../assets/images/comingSoon/Cuate Collab.png")}
        style={{
          width: 318,
          height: 318,
        }}
      />

      <NextButton
        onPressAction={() => {
          navigation.navigate(NAVIGATION.COMINGSOON.SCREEN4);
        }}
      />
    </View>
  );
};

export default Screen3;
