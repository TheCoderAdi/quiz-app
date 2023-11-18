import { Platform, StatusBar } from "react-native";

export default Colors = {
  primary: "#2e2e2e",
  secondary: "#3c3c3c",
  accent: "#ffcc00",
  text: "#ffffff",
  textDark: "#bfbfbf",
  error: "#ff0000",
};

export const containerStyle = {
  flex: 1,
  backgroundColor: Colors.primary,
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  padding: 35,
};
