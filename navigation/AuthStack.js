import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Register from "../screens/Register/Register";
import Header from "../components/Header/Header";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login/Login";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={({ route }) => {
        return {
          header: () => (
            <Header titleHeader="Bienvenido"/>
          ),
        };
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
