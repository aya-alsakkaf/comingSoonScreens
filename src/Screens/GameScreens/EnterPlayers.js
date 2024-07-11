import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import PlayersContext from "../../Context/PlayersContext";
import { useNavigation } from "@react-navigation/native";
import NextButton from "../../Components/NextButton";
import { NAVIGATION } from "../../Navigation/Index";

const EnterPlayers = () => {
  const [players, setPlayers] = useContext(PlayersContext);
  const navigation = useNavigation();
  const [playersInput, setPlayersInput] = useState([
    "لاعب ١",
    "لاعب ٢",
    "لاعب ٣",
  ]);
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        padding: 10,
        gap: 20,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontFamily: "Amiri-Bold",
          textAlign: "center",
        }}
      >
        اضف على الاقل ٣ لاعبين ثم اضغط التالي
      </Text>

      <ScrollView
        contentContainerStyle={{
          gap: 10,
        }}
      >
        {playersInput.map((player, index) => {
          return (
            <View
              key={index}
              style={{
                alignItems: "center",
                gap: 10,
              }}
            >
              <TextInput
                placeholder={player}
                style={{
                  width: 204,
                  height: 74,
                  backgroundColor: "#CE875F",
                  borderRadius: 21,
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Amiri-Bold",
                  fontSize: 30,
                }}
                onChangeText={(t) => {
                  playersInput[index] = t;
                  setPlayersInput([...playersInput]);
                }}
              />
            </View>
          );
        })}
      </ScrollView>

      <View
        style={{
          alignItems: "center",
          gap: 10,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#177E86",
            width: 200,
            height: 74,
            borderRadius: 21,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setPlayersInput([
              ...playersInput,
              "لاعب " + (playersInput.length + 1),
            ]);
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: "white",
              fontFamily: "Amiri-Bold",
            }}
          >
            اضف لاعب
          </Text>
        </Pressable>

        <NextButton
          onPressAction={() => {
            setPlayers(playersInput);
            navigation.navigate(NAVIGATION.GAMESCREEN.PASSTHEPHONE);
          }}
        />
      </View>
    </View>
  );
};

export default EnterPlayers;

const styles = StyleSheet.create({});
