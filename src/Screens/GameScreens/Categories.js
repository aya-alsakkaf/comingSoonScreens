import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import GameDataContext from "../../Context/GameDataContext";
import { useNavigation } from "@react-navigation/native";
import { getRandomIndex } from "../../gameData/utils";
import { NAVIGATION } from "../../Navigation/Index";

const Categories = () => {
  const [game, setGame] = useContext(GameDataContext);
  const navigation = useNavigation();
  const categoryList = game.categories.map((c, index) => {
    return (
      <Pressable
        key={index}
        style={{
          backgroundColor: "#CA6453",
          width: 200,
          height: 169,
          borderRadius: 21,
        }}
        onPress={() => {
          const rIndex = getRandomIndex(game.categories[index].topics);
          setGame({
            ...game,
            category: c.category,
            topic: game.categories[index].topics[rIndex],
          });
          navigation.navigate(NAVIGATION.GAMESCREEN.ENTERPLAYERS);
        }}
      >
        <Text
          style={{
            fontSize: 30,
            color: "white",
            fontFamily: "Amiri-Bold",
            textAlign: "center",
            marginTop: 50,
          }}
        >
          {c.category}
        </Text>
      </Pressable>
    );
  });
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        alignItems: "center",
        gap: 20,
        justifyContent: "space-around",
        backgroundColor: "white",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          color: "black",
          fontFamily: "Amiri-Bold",
        }}
      >
        اختار نوع السالفة
      </Text>
      <ScrollView
        style={{
          gap: 10,
          backgroundColor: "white",
        }}
        contentContainerStyle={{
          rowGap: 10,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {categoryList}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
