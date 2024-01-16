import React from "react";
import { View, Button } from "react-native";
import Productos from "../../components/Productos/Productos";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../../store/services/productService";

export default function Home({ navigation }) {
  const allProducts = useSelector((state) => state.products.value.products);
  const { data: products } = useGetProductsQuery()

  return (
    <View>
      <Button
        title="Ver categorias"
        onPress={() => navigation.navigate("Categories")}
      />
      <Productos navigation={navigation} dataProductos={products} />
    </View>
  );
}
