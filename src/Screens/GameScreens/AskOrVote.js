import { Button, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import NextButton from "../../Components/NextButton";
import PeopleButton from "../../Components/PeopleButton";
import { NAVIGATION } from "../../Navigation/Index";
import PlayersContext from "../../Context/PlayersContext";
import { getRandomIndex } from "../../gameData/utils";

const AskOrVote = () => {
  const [players, setPlayer] = useContext(PlayersContext);
  const navigation = useNavigation();
  const [askingPlayer, setAskingPlayer] = useState(
    players[getRandomIndex(players)]
  ); //random index for now

  const [theOneJustAsked, setTheOneJustAsked] = useState(null);
  const [show, setShow] = useState(true);
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
      {show ? (
        <>
          <Text
            style={{
              fontSize: 30,
              textAlign: "center",
              fontFamily: "Amiri-Regular",
            }}
          >
            {askingPlayer} اختار شخص تبغى تساله او اضغط على التالي اذا كنتم
            جاهزين للتصويت على اللي برا السالفة
          </Text>
          {players.map((player, index) => {
            if (player != askingPlayer && player != theOneJustAsked)
              return (
                <PeopleButton
                  key={index}
                  name={player}
                  onPressAction={() => {
                    setTheOneJustAsked(askingPlayer);
                    setAskingPlayer(player);
                    setShow(false);
                  }}
                />
              );
            else return null;
          })}
          <NextButton
            onPressAction={() =>
              navigation.navigate(NAVIGATION.GAMESCREEN.VOTE)
            }
          />
        </>
      ) : (
        <>
          <Text
            style={{
              fontSize: 30,
              textAlign: "center",
              fontFamily: "Amiri-Regular",
            }}
          >
            {theOneJustAsked} اسأل {askingPlayer} سؤال متعلق بالسالفةاختار سؤالك
            بعناية حتى اللي برا السالفة مايعرف عن ايش تتكلمون
          </Text>
          <NextButton
            onPressAction={() => {
              setShow(true);
            }}
          />
        </>
      )}
    </View>
  );
};

export default AskOrVote;

const styles = StyleSheet.create({});
