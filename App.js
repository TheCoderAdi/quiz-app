import { StatusBar } from "expo-status-bar";
import { StyleSheet, Appearance } from "react-native";
import Main from "./Main";

export default function App() {
  const colorScheme = Appearance.getColorScheme();
  return (
    <>
      <StatusBar style={`${colorScheme == "dark" ? "light" : "light"}`} />
      <Main />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
