import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import PlayersContext from "../../Context/PlayersContext";
import { shuffleArray } from "../../gameData/utils";
import GameDataContext from "../../Context/GameDataContext";
import PeopleButton from "../../Components/PeopleButton";
import { NAVIGATION } from "../../Navigation/Index";
import { useNavigation } from "@react-navigation/native";

const Vote2 = ({ route }) => {
  const { out } = route.params;
  const [players, setPlayers] = useContext(PlayersContext);
  const [game, setGame] = useContext(GameDataContext);
  const [votePlayers, setVotePlayers] = useState(shuffleArray(players) || []);
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);
  const navigation = useNavigation();
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
          textAlign: "center",
          fontFamily: "Amiri-Regular",
        }}
      >
        {out} شنو هي السالفة؟
      </Text>

      {game.categories
        .find((c) => c.category == game.category)
        .topics.map((t, index) => {
          return (
            <PeopleButton
              key={index}
              name={t}
              onPressAction={() => {
                setGame({ ...game, outTopic: t });
                navigation.navigate(NAVIGATION.GAMESCREEN.RESULTS);
              }}
            />
          );
        })}
    </View>
  );
};

export default Vote2;

const styles = StyleSheet.create({});
