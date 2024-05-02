import { StatusBar } from "react-native";
import "react-native-gesture-handler";

import { Home } from "./src/screens/Home";

import { HoldMenuProvider } from "react-native-hold-menu";

import { Feather } from "@expo/vector-icons";

export default function App() {
  return (
    <HoldMenuProvider
      theme="dark"
      safeAreaInsets={{ top: 5, right: 5, bottom: 5, left: 5 }}
      iconComponent={Feather}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </HoldMenuProvider>
  );
}
