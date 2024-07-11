import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import GameDataContext from "../../Context/GameDataContext";
import NextButton from "../../Components/NextButton";
import PeopleButton from "../../Components/PeopleButton";
import { useNavigation } from "@react-navigation/native";
import { NAVIGATION } from "../../Navigation/Index";
import categories from "../../gameData";

const Results = () => {
  const [game, setGame] = useContext(GameDataContext);
  useEffect(() => {
    console.log("HELLO");
    setGame({
      ...game,
      players: game.players.map((p) => {
        p.score = 0;
        console.log(Object.keys(game));
        if (p.votedOn == game.out) {
          if (game.topic != game.outTopic) {
            p.score = 100;
          }
        }
        if (p.name == game.out) {
          if (game.outTopic == game.topic) {
            p.score = 200;
          }
        }
        return p;
      }),
    });
  }, []);
  // console.log(game.players);
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
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
        النتائج
      </Text>

      <View
        style={{
          width: 363,
          height: 457,
          backgroundColor: "#DFAF93",
          marginBottom: 30,
        }}
      >
        {game.players.map((p, index) => {
          return (
            <View
              key={index}
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                padding: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "Amiri-Bold",
                  fontSize: 20,
                  color: "#177E86",
                }}
              >
                {p.score}
              </Text>
              <Text
                style={{
                  fontFamily: "Amiri-Bold",
                  fontSize: 20,
                }}
              >
                ...
              </Text>
              <Text
                style={{
                  fontFamily: "Amiri-Bold",
                  fontSize: 20,
                }}
              >
                {p.name}
              </Text>
            </View>
          );
        })}
      </View>
      <PeopleButton
        name={"العب مرة ثانية"}
        onPressAction={() => {
          navigation.navigate(NAVIGATION.GAMESCREEN.HOME);
          setGame({
            categories: categories,
            category: "",
            topic: "",
            players: [],
            out: "",
            outTopic: "",
          });
        }}
      />
    </View>
  );
};

export default Results;

const styles = StyleSheet.create({});
