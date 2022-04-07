import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function Onboarding_3({ navigation }: {navigation: any}) {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={require("../../assets/images/money.png")} />
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "#126FB2" }}>Earn Money</Text>
      <Text style={styles.smallText}>Earn money easily by clearing the snow</Text>

      <View style={styles.bottomArrows}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <FontAwesome5 name="arrow-left" size={32} color="#126FB2" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle}>
          <Entypo name="dots-three-horizontal" size={32} color="#126FB2" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            navigation.navigate("login");
          }}
        >
          <FontAwesome5 name="arrow-right" size={32} color="#126FB2" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8F4FD",
    flexDirection: "column",
  },
  image: {
    marginBottom:30
  },

  font: {
    color: "#126FB2",
    fontWeight: "bold",
    fontSize: 38,
  },
  buttonStyle: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  smallText: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
    textAlign: "center",
    fontSize: 16,
    color: "#126FB2",
  },
  bottomArrows: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    marginBottom: 50,
  },
});
