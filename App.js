import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import ComingSoon from "./src/Navigation/ComingSoon/ComingSoon";
import { useFonts } from "expo-font";

export default function App() {
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
      <NavigationContainer>
        <ComingSoon />
      </NavigationContainer>
    </SafeAreaView>
  );
}
