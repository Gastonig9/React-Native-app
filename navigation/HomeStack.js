import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "../screens/Home/Home";
import Categories from "../screens/Categories/Categories";
import ItemListCategory from "../components/ItemListCategory/ItemListCategory";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import Header from "../components/Header/Header";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => {
        return {
          header: () => (
            <Header
              titleHeader={
                route.name === "Home"
                  ? "Home"
                  : route.name === "Categories"
                  ? "Categorias"
                  : route.name === "ProductDetail"
                  ? route.params.ptitle
                  : route.name === "ItemListCategory"
                  ? route.params.category
                  : "Detalle"
              }
            />
          ),
        };
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="ItemListCategory" component={ItemListCategory} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
