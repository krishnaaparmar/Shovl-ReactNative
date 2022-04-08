import { StyleSheet, View } from "react-native";
import LoginScreen from "./src/screens/Login";
import SignUpScreen from "./src/screens/SignUP";
import { BottomNavigator } from "./src/navigator/bottomNavigator";
import AddListing from "./src/screens/AddListing";
import Onboarding_1 from "./src/screens/Onboarding_1";
import Onboarding_2 from "./src/screens/Onboarding_2";
import Onboarding_3 from "./src/screens/Onboarding_3";
import BidPricing from "./src/screens/BidPricing";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdvertiseDetails from "./src/screens/AdvertiseDetails";
import Payment from "./src/screens/Payment";
import ConfirmShovelerScreen from "./src/screens/ConfirmShoveler";
import { createServer } from "miragejs"

const MainStack = createNativeStackNavigator();

createServer({
  routes() {
    this.get("/api/login", () => {
      return {
        username: "Emma", 
        authToken: "asdkjanskdjnaklsdjlasjdlaksdjllljl",
      }
    })
  },
})

export default function App() {

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="onboarding_1" screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="login" component={LoginScreen} />
        <MainStack.Screen name="signUp" component={SignUpScreen} />
        <MainStack.Screen name="bottomNav" component={BottomNavigator} />
        <MainStack.Screen name="AddListing" component={AddListing} />
        <MainStack.Screen name="onboarding_1" component={Onboarding_1} />
        <MainStack.Screen name="onboarding_2" component={Onboarding_2} />
        <MainStack.Screen name="onboarding_3" component={Onboarding_3} />
        <MainStack.Screen name="AdvertiseDetails" component={AdvertiseDetails} />
        <MainStack.Screen name="ConfirmShovelerScreen" component={ConfirmShovelerScreen} />
        <MainStack.Screen name="BidPricing" component={BidPricing} />
        <MainStack.Screen name="Payment" component={Payment} />
      </MainStack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
