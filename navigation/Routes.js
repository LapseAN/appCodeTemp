import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Home from "../components/Home/Home";
// import About from "../components/About/About";
import navigationStrings from "../constants/navigationStrings";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Home,
  About,
  InputProblem,
  ProblemOnProcess,
  ProblemDetails,
  BiddingRequest,
} from "../components";

const Stack = createNativeStackNavigator();
const RootStack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        initialRouteName={navigationStrings.HOME}
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name={navigationStrings.HOME} component={Home} />
        <Stack.Screen name={navigationStrings.ABOUT} component={About} />
      </Stack.Navigator> */}

      <RootStack.Navigator>
        <RootStack.Group
          initialRouteName={navigationStrings.HOME}
          screenOptions={{
            headerStyle: {
              backgroundColor: "crimson",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <RootStack.Screen
            name={navigationStrings.HOME}
            component={Home}
            options={{ title: "SBF R&D" }}
          />
          <RootStack.Screen
            name={navigationStrings.PROBLEMDETAILS}
            component={ProblemDetails}
            options={({ route }) => ({ title: route.params.center })}
          />
          <RootStack.Screen
            name={navigationStrings.BIDDINGREQUEST}
            component={BiddingRequest}
            options={{ title: "SBF R&D" }}
          />
          <RootStack.Screen name={navigationStrings.ABOUT} component={About} />
        </RootStack.Group>
        <RootStack.Group
          screenOptions={{
            presentation: "modal",
            headerStyle: {
              backgroundColor: "crimson",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <RootStack.Screen
            name={navigationStrings.INPUTPROBLEM}
            component={InputProblem}
            options={{ headerLeft: null }}
          />
          <RootStack.Screen
            name={navigationStrings.PROBLEMONPROCESS}
            component={ProblemOnProcess}
            options={{ headerLeft: null }}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
