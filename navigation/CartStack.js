import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header/Header";
import Cart from "../screens/Cart/Cart"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={({ route }) => {
        return {
          header: () => (
            <Header
              titleHeader="Carrito"
            />
          ),
        };
      }}
    >
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartStack;

const styles = StyleSheet.create({});
