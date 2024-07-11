import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import NextButton from "../../Components/NextButton";
import { useNavigation } from "@react-navigation/native";
import { NAVIGATION } from "../../Navigation/Index";
import GameDataContext from "../../Context/GameDataContext";

const InOrOut = ({ player, onPress }) => {
  const navigation = useNavigation();
  const [game, setGame] = useContext(GameDataContext);

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
        {player.name || "آيه"}
      </Text>
      {player.isOut ? (
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            fontFamily: "Amiri-Regular",
          }}
        >
          انت داخل في السالفة و اللي هي {game.topic} هدفك في اللعبة معرفة مين
          منكم اللي برا السالفة. اضغط التالي!{" "}
        </Text>
      ) : (
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            fontFamily: "Amiri-Regular",
          }}
        >
          انت اللي برا السالفة! حاول تعرف شنو السالفة بالضبط من كلام البقية أو
          تنقعهم يصوتون على الشخص الخطأ! تلميح السالفة عن {game.category}
        </Text>
      )}

      <NextButton onPressAction={onPress} />
    </View>
  );
};

export default InOrOut;

const styles = StyleSheet.create({});
