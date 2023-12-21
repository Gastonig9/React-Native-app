import React from "react";
import { View, Text, FlatList, Button } from "react-native";
import Productos from "../../components/Productos/Productos";
import { useSelector } from "react-redux";

export default function Home({ navigation }) {
  const allProducts = useSelector((state) => state.products.value.products);

  return (
    <View>
      <Button
        title="Ver categorias"
        onPress={() => navigation.navigate("Categories")}
      />
      <Productos navigation={navigation} dataProductos={allProducts} />
    </View>
  );
}
