import React, { useState } from "react";
import { Text,Button, View, StyleSheet, TouchableOpacity, Image, ScrollView, SafeAreaView, ImageBackground, TextInput, Alert } from "react-native";

import Header from "../components/Header";
import ListItem from "../components/ListItem";
import { IToDo } from "../resources/ITToDo";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const AddListing = ({ navigation, route}: {navigation: any,route: any}) => {
    const addListings = () => {
       alert("Added Successfully! You can see your post in Home Screen")
      };

      const signout = () => {
        Alert.alert("Attention \n", " Do you really want to sign out!", [
          {
            text: "Yes",
            onPress: () => {
              navigation.reset({
                index: 0,
                routes: [{ name: "login" }],
              });
            },
          },
          {
            text: "No",
            onPress: () => {
              navigation.goBack();
            },
            style: "cancel",
          },
        ]);
      };
  return (
    <ScrollView>
    {/* Start the navigation */}
    
    <View style={styles.wrapper}>
        <View style={styles.menu}>
            <Text style={styles.tag}>Add Listing</Text>
            <TouchableOpacity activeOpacity={0.5} onPress={() => {signout();
          }} ><FontAwesome5 name="power-off" style={{fontSize:25,color:"white"}}/></TouchableOpacity>
        </View>
        {/* End of navigation */}
        {/* Body part Starts */}
        <View style={styles.formElements}>
        <View style={styles.labelName}>
                <Text style={{ width: "30%",fontWeight:"bold",fontSize:18 }}>Title:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder=" Enter Title"
                />
            </View>

            <View style={styles.labelName}>
                <Text style={{ width: "30%",fontWeight:"bold",fontSize:18 }}>Address:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder=" Enter Address"
                />
            </View>
            <View style={styles.labelName}>
                <Text style={{ width: "30%",fontWeight:"bold",fontSize:18 }}>Description</Text>

                <TextInput style={styles.textDescription}
                    multiline={true} numberOfLines={4} placeholder=" Description of the property."
                /></View>
            <View style={styles.labelName}>
                <Text style={{fontWeight:"bold",fontSize:18 ,textAlign:"center",width:"50%",marginVertical:7}}>From Date:</Text>
                <Text style={{fontWeight:"bold",fontSize:18 ,textAlign:"center",width:"50%",marginVertical:7}}>To Date:</Text>
                
            </View>
            <View style={styles.labelName}>
            <TextInput
                    style={styles.textInput}
                    placeholder="mm/dd/yyy"
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="mm/dd/yyy"
                />
            </View>
            <View style={styles.labelName}>
            <Text style={{fontWeight:"bold",fontSize:18 ,textAlign:"center",width:"50%",marginVertical:7}}>From Time:</Text>
            <Text style={{fontWeight:"bold",fontSize:18 ,textAlign:"center",width:"50%",marginVertical:7}}>To Time:</Text>
                
            </View>
            <View style={styles.labelName}>
            <TextInput
                    style={styles.textInput}
                    placeholder="HH:MM"
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="HH:MM"
                />
            </View>
            <View style={styles.labelName}>
                <Text style={{ width: "85%",fontWeight:"bold",fontSize:18,marginVertical:10,marginRight:"15%"}}>Add Pictures:</Text>
            </View>
            { <View style={styles.labelName}>
            
                <Image
                    source={require('./../../assets/images/snowAdvertise.jpeg')}
                    style={{width: 100, height:100,marginLeft:10}}
                />
                <Image
                    source={require('./../../assets/images/snowAdvertise1.jpeg')}
                    style={{width: 100, height:100,marginLeft:20}}
                />
                
                 <FontAwesome5 name="plus" style={{color:"black",opacity:0.5,fontSize:80,marginLeft:20}}
                />
            </View> }
            <View style={styles.flexrow}>
                <TouchableOpacity activeOpacity={0.5}
          onPress={() => {
            addListings();
          }} >
                    <Text style={styles.buttonStyle}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5}
           onPress={() => {
            navigation.goBack();
          }}>
                    <Text style={styles.cancelButton}>Cancel</Text>
                </TouchableOpacity>

            </View>

        </View>

    </View>
</ScrollView>
)

}

const styles = StyleSheet.create({
wrapper: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        // backgroundColor: "#E8F4FD",
        },
labelName: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
        },
menu: {
        flexDirection: "row",
        width: "100%",
        padding: 15,
        borderBottomWidth: 1,
        marginTop: 30,
        borderColor: "#0f0f0f",
        justifyContent: "space-between",
        backgroundColor: "#126FB2"
},
logoimage:
{ width: 30, height: 30 },
tag:
    { fontSize: 20, 
    fontWeight: "bold",
    color:"white"
    },
image: {
    width: 400,
    height: 200,
    },
bgimage: {
    justifyContent: "center",
    flex: 1
    },
formElements: {
        alignItems: 'center',
        justifyContent: 'center',
        padding:20,
        marginTop:10
            },
flexrow: {
        flexDirection: "row",
        },

buttonStyle: {
        backgroundColor: '#126fb2',
        borderRadius: 8,
        padding: 10,
        color: "#fff",
        margin: 20,
        width: 100,
        textAlign: "center",
        fontWeight: "bold",
        fontSize:16
        },
cancelButton: {
        backgroundColor: '#900',
        borderRadius: 8,
        padding: 10,
        color: "#fff",
        margin: 20,
        width: 100,
        textAlign: "center",
        fontWeight: "bold",
        fontSize:16
        },
textInput: {
        color: '#126fb2',
        borderWidth: 1,
        borderColor: '#126fb2',
        padding: 8,
        margin: 8,
        width: "60%",
        borderRadius: 10,
        fontSize: 14,
        flex: 1,
        height:35
        },
        textDescription: {
            color: '#126fb2',
            borderWidth: 1,
            borderColor: '#126fb2',
            padding: 8,
            margin: 8,
            width: "60%",
            borderRadius: 10,
            fontSize: 14,
            flex: 1,
            height:50
            }

})


export default AddListing;
