import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import colors from "./constants/colors";
import QuizScreen from "./screens/QuizScreen";
import ResultScreen from "./screens/ResultScreen";

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: colors.secondary,
          height: 50,
          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
          borderTopWidth: 0,
          position: "absolute",
          bottom: 0,
        },
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={30} color="white" />
            ) : (
              <AntDesign name="home" size={30} color="white" />
            ),
        }}
      />
      <Tab.Screen
        name="Quiz"
        component={QuizScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: { color: "white" },
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="newspaper" size={30} color="white" />
            ) : (
              <Ionicons name="newspaper-outline" size={30} color="white" />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Main" component={BottomTabs} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
