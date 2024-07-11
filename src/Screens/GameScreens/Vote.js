import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import NextButton from "../../Components/NextButton";
import PeopleButton from "../../Components/PeopleButton";
import PlayersContext from "../../Context/PlayersContext";
import GameDataContext from "../../Context/GameDataContext";
import { shuffleArray } from "../../gameData/utils";
import { useNavigation } from "@react-navigation/native";
import { NAVIGATION } from "../../Navigation/Index";

const Vote = () => {
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
      {!show ? (
        <>
          {counter != votePlayers.length ? (
            <>
              <Text
                style={{
                  fontSize: 30,
                  textAlign: "center",
                  fontFamily: "Amiri-Regular",
                }}
              >
                <Text
                  style={{
                    color: "#F4800B",
                  }}
                >
                  {votePlayers[counter]}{" "}
                </Text>
                اختار شخص اللي تظن انه برا السالفة
              </Text>
              {votePlayers.map((p, index) => {
                if (index != counter) {
                  return (
                    <PeopleButton
                      name={p}
                      onPressAction={() => {
                        setGame({
                          ...game,
                          players: [
                            ...game.players,
                            { name: votePlayers[counter], votedOn: p },
                          ],
                        });
                        setCounter(counter + 1);
                      }}
                    />
                  );
                }
              })}
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
                الشخص اللي برا السالفة
              </Text>
              <View
                style={{
                  width: 293,
                  height: 293,
                  backgroundColor: "rgba(202, 100, 83, 0.7)",
                  borderRadius: 200,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              ></View>
              <NextButton onPressAction={() => setShow(true)} />
            </>
          )}
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
            الشخص اللي برا السالفة
          </Text>
          <View
            style={{
              width: 293,
              height: 293,
              backgroundColor: "rgba(202, 100, 83, 0.7)",
              borderRadius: 200,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 30,
                textAlign: "center",
                fontFamily: "Amiri-Regular",
                color: "#fff",
              }}
            >
              {game.out}
            </Text>
          </View>
          <NextButton
            onPressAction={() => {
              setShow(true);
              navigation.navigate(NAVIGATION.GAMESCREEN.VOTE2, {
                out: game.out,
              });
            }}
          />
        </>
      )}
    </View>
  );
};

export default Vote;

const styles = StyleSheet.create({});
