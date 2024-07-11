import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import NextButton from "../../Components/NextButton";
import { NAVIGATION } from "../../Navigation/Index";

const PreQuestionsRound = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
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
        وقت الاسئلة
      </Text>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          fontFamily: "Amiri-Regular",
        }}
      >
        كل شخص راح يسال شخص ثاني سؤال متعلق بالسالفة اضغطوا التالي حتى تعرفون
        مين رح يسأل مين
      </Text>

      <NextButton
        onPressAction={() =>
          navigation.navigate(NAVIGATION.GAMESCREEN.QUESTIONSROUND)
        }
      />
    </View>
  );
};

export default PreQuestionsRound;

const styles = StyleSheet.create({});
