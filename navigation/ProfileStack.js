import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header/Header";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile/Profile";
import ImageSelector from "../screens/ImageSelector/ImageSelector";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={({ route }) => {
        return {
          header: () => (
            <Header
              titleHeader="Profile"
            />
          ),
        };
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ImageSelector" component={ImageSelector} />
    </Stack.Navigator>
  );
};

export default ProfileStack;

const styles = StyleSheet.create({});
