import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ProductCard from "../ProductCard/ProductCard";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector } from "react-redux";

const Productos = ({ dataProductos, navigation }) => {
  const searchedProducts = useSelector((state) => state.products.value.searchedProducts);

  const renderProduct = ({ item }) => (
    <ProductCard navigation={navigation} producto={item} />
  );

  return (
    <>
      <View style={styles.productosContain}>
        <SearchBar />
        <FlatList
          data={searchedProducts.length > 0 ? searchedProducts : dataProductos}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  productosContain: {
    overflow: "scroll",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    fontSize: 16,
    marginTop: 10,
  },
});

export default Productos;
