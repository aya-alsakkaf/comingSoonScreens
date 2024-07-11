import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import ComingSoon from "./src/Navigation/ComingSoon/ComingSoon";
import { useFonts } from "expo-font";
import GameNavgiation from "./src/Navigation/GameNavigation/GameNavgiation";
import { useState } from "react";
import categories from "./src/gameData";
import GameDataContext from "./src/Context/GameDataContext";
import PlayersContext from "./src/Context/PlayersContext";

export default function App() {
  const [players, setPlayers] = useState([]);
  const [game, setGame] = useState({
    categories: categories,
    category: "",
    topic: "",
    players: [],
    out: "",
    outTopic: "",
  });
  const [loaded, error] = useFonts({
    "Amiri-Regular": require("./assets/fonts/Amiri/Amiri-Regular.ttf"),
    "Amiri-Bold": require("./assets/fonts/Amiri/Amiri-Bold.ttf"),
    "Amiri-BoldItalic": require("./assets/fonts/Amiri/Amiri-BoldItalic.ttf"),
    "Amiri-Italic": require("./assets/fonts/Amiri/Amiri-Italic.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <GameDataContext.Provider value={[game, setGame]}>
        <PlayersContext.Provider value={[players, setPlayers]}>
          <NavigationContainer>
            <GameNavgiation />
          </NavigationContainer>
        </PlayersContext.Provider>
      </GameDataContext.Provider>
    </SafeAreaView>
  );
}
