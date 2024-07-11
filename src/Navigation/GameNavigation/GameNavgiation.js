import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NAVIGATION } from "../Index";
import PassThePhone from "../../Screens/GameScreens/PassThePhone";
import InOrOut from "../../Screens/GameScreens/InOrOut";
import QuestionsRound from "../../Screens/GameScreens/QuestionsRound";
import PreQuestionsRound from "../../Screens/GameScreens/PreQuestionsRound";
import AskOrVote from "../../Screens/GameScreens/AskOrVote";
import Vote from "../../Screens/GameScreens/Vote";
import Screen1 from "../../Screens/ComingSoon/Screen1";
import Screen2 from "../../Screens/ComingSoon/Screen2";
import Screen3 from "../../Screens/ComingSoon/Screen3";
import Screen4 from "../../Screens/ComingSoon/Screen4";
import Screen5 from "../../Screens/ComingSoon/Screen5";
import Screen6 from "../../Screens/ComingSoon/Screen6";
import HomeScreen from "../../Screens/HomeScreen";
import Categories from "../../Screens/GameScreens/Categories";
import EnterPlayers from "../../Screens/GameScreens/EnterPlayers";
import Vote2 from "../../Screens/GameScreens/Vote2";
import Results from "../../Screens/GameScreens/Results";

const GameNavgiation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "",
        headerShadowVisible: false,
        headerShown: false,
      }}
    >
      <Stack.Screen name={NAVIGATION.GAMESCREEN.HOME} component={HomeScreen} />
      <Stack.Screen name={NAVIGATION.COMINGSOON.SCREEN1} component={Screen1} />
      <Stack.Screen name={NAVIGATION.COMINGSOON.SCREEN2} component={Screen2} />
      <Stack.Screen name={NAVIGATION.COMINGSOON.SCREEN3} component={Screen3} />
      <Stack.Screen name={NAVIGATION.COMINGSOON.SCREEN4} component={Screen4} />
      <Stack.Screen name={NAVIGATION.COMINGSOON.SCREEN5} component={Screen5} />
      <Stack.Screen name={NAVIGATION.COMINGSOON.SCREEN6} component={Screen6} />
      <Stack.Screen
        name={NAVIGATION.GAMESCREEN.CATEGORIES}
        component={Categories}
      />
      <Stack.Screen
        name={NAVIGATION.GAMESCREEN.ENTERPLAYERS}
        component={EnterPlayers}
      />
      <Stack.Screen
        name={NAVIGATION.GAMESCREEN.PASSTHEPHONE}
        component={PassThePhone}
      />
      <Stack.Screen
        name={NAVIGATION.GAMESCREEN.FINDOUTINOROUT}
        component={InOrOut}
      />
      <Stack.Screen name={NAVIGATION.GAMESCREEN.VOTE2} component={Vote2} />
      <Stack.Screen
        name={NAVIGATION.GAMESCREEN.PREQUESTIONSROUND}
        component={PreQuestionsRound}
      />
      <Stack.Screen
        name={NAVIGATION.GAMESCREEN.QUESTIONSROUND}
        component={QuestionsRound}
      />
      <Stack.Screen
        name={NAVIGATION.GAMESCREEN.ASKORVOTE}
        component={AskOrVote}
      />
      <Stack.Screen name={NAVIGATION.GAMESCREEN.RESULTS} component={Results} />
      <Stack.Screen name={NAVIGATION.GAMESCREEN.VOTE} component={Vote} />
    </Stack.Navigator>
  );
};

export default GameNavgiation;

const styles = StyleSheet.create({});
