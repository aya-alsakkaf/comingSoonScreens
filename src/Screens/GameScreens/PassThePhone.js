import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import NextButton from "../../Components/NextButton";
import { useNavigation } from "@react-navigation/native";
import { NAVIGATION } from "../../Navigation/Index";
import PlayersContext from "../../Context/PlayersContext";
import GameDataContext from "../../Context/GameDataContext";
import { getRandomIndex, shuffleArray } from "../../gameData/utils";
import GiveTo from "../../Components/GiveTo";
import InOrOut from "./InOrOut";

const PassThePhone = () => {
  const [players, setPlayers] = useContext(PlayersContext);
  const [game, setGame] = useContext(GameDataContext);
  const [theInformationPlayer, setTheInformationPlayer] = useState([]);
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    // shuffle the array
    const shuffledPlayers = shuffleArray(players);
    // get random index
    const index_ = getRandomIndex(shuffledPlayers);
    // set the guy out side the salfa
    setGame({ ...game, out: shuffledPlayers[index_] });
    setTheInformationPlayer(
      shuffledPlayers.map((p, index) => {
        return { name: p, isOut: index == index_ };
      })
    );
  }, []);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {counter != theInformationPlayer.length ? (
        <>
          {!show ? (
            <GiveTo
              name={theInformationPlayer[counter].name}
              onPressAction={() => {
                setShow(true);
              }}
            />
          ) : (
            <InOrOut
              player={theInformationPlayer[counter]}
              onPress={() => {
                setShow(false);
                setCounter(counter + 1);
              }}
            />
          )}
        </>
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <NextButton
            onPressAction={() =>
              navigation.navigate(NAVIGATION.GAMESCREEN.PREQUESTIONSROUND)
            }
          />
        </View>
      )}
    </View>
  );
};

export default PassThePhone;

const styles = StyleSheet.create({});
