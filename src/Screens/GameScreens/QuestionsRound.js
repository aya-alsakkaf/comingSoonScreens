import { Button, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import NextButton from "../../Components/NextButton";
import { NAVIGATION } from "../../Navigation/Index";
import { selectPlayers, shuffleArray } from "../../gameData/utils";
import PlayersContext from "../../Context/PlayersContext";

const QuestionsRound = () => {
  const [players, setPlayers] = useContext(PlayersContext);
  const [theInformationPlayer, setTheInformationPlayer] = useState([[]]);
  const [counter, setCounter] = useState(0);
  const navigation = useNavigation();
  useEffect(() => {
    // shuffle
    const shuffledArray = shuffleArray(players);
    // get the order
    setTheInformationPlayer(selectPlayers(shuffledArray));
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "space-around",
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
        وقت الاسئلة
      </Text>

      {counter != theInformationPlayer.length ? (
        <>
          <Text
            style={{
              fontSize: 30,
              textAlign: "center",
              fontFamily: "Amiri-Regular",
            }}
          >
            {theInformationPlayer[counter][0]} اسأل{" "}
            {theInformationPlayer[counter][1]} سؤال متعلق بالسالفة. اختار سؤالك
            بعناية حتى اللي برا السالفة مايعرف عن شنو تتكلمون
          </Text>
          <NextButton
            onPressAction={() => {
              setCounter(counter + 1);
            }}
          />
        </>
      ) : (
        <NextButton
          onPressAction={() =>
            navigation.navigate(NAVIGATION.GAMESCREEN.ASKORVOTE)
          }
        />
      )}
    </View>
  );
};

export default QuestionsRound;

const styles = StyleSheet.create({});
