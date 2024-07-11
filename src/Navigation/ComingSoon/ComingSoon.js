import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NAVIGATION } from "../Index";
import Screen1 from "../../Screens/ComingSoon/Screen1";
import Screen2 from "../../Screens/ComingSoon/Screen2";
import Screen3 from "../../Screens/ComingSoon/Screen3";
import Screen4 from "../../Screens/ComingSoon/Screen4";
import Screen5 from "../../Screens/ComingSoon/Screen5";
import Screen6 from "../../Screens/ComingSoon/Screen6";

const ComingSoon = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "",
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name={NAVIGATION.COMINGSOON.SCREEN1} component={Screen1} />
      <Stack.Screen name={NAVIGATION.COMINGSOON.SCREEN2} component={Screen2} />
      <Stack.Screen name={NAVIGATION.COMINGSOON.SCREEN3} component={Screen3} />
      <Stack.Screen name={NAVIGATION.COMINGSOON.SCREEN4} component={Screen4} />
      <Stack.Screen name={NAVIGATION.COMINGSOON.SCREEN5} component={Screen5} />
      <Stack.Screen name={NAVIGATION.COMINGSOON.SCREEN6} component={Screen6} />
    </Stack.Navigator>
  );
};

export default ComingSoon;

const styles = StyleSheet.create({});
