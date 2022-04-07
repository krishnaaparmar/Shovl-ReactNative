import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Fonts
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

// Pages
import HomeScreen from "../screens/Home";
import ConfirmShovelerScreen from "../screens/ConfirmShoveler";
import AddListing from "../screens/AddListing";
import ProfileScreen from "../screens/Profile";


const Tab = createBottomTabNavigator();

export const BottomNavigator = ({ route }: {route: any}) => {
  const username = route.params.username;

  return (
    <Tab.Navigator
      initialRouteName={"home"}
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#126FB2",
         
        },
        headerTitleStyle: {
          color: "white",
          fontSize: 22,
        },
        tabBarStyle: { backgroundColor: "#126FB2", },
        tabBarActiveTintColor: "white",
      }}
    >
      <Tab.Screen name="home" component={HomeScreen}
       options={{ headerShown: false, title: "Homescreen", tabBarIcon: ({ color }) => <FontAwesome name="list" size={24} color={"white"} /> }} initialParams={{ username: username }} />
      
      <Tab.Screen name="calendar" component={AddListing}
       options={{ headerShown: false,title: "Add Listing", tabBarIcon: () => <FontAwesome name="plus" size={24} style={{color:"white"}} /> }} />

      <Tab.Screen name="listView" component={ConfirmShovelerScreen}
       options={{ headerShown: false, title: "Confirm", tabBarIcon: ({ color }) => <FontAwesome5 name="check" size={24} color="white" /> }} />
      
      <Tab.Screen name="logout" component={ProfileScreen} 
      options={{ headerShown: false, title: "Profile", tabBarIcon: () => <Entypo name="user" size={24} color="white" /> }} />
    </Tab.Navigator>
  );
};
