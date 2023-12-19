import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ProductCard from "../ProductCard/ProductCard";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import ProductDetail from "../ProductDetail/ProductDetail";

const Productos = ({ dataProductos, navigation }) => {
  const [error, setError] = useState(false);
  const [searchedProducts, setSearchedProducts] = useState([]);

  const renderProduct = ({ item }) => (
    <ProductCard navigation={navigation} producto={item} />
  );

  return (
    <>
      <View style={styles.productosContain}>
        <SearchBar
          dataProducts={dataProductos}
          setSearchedProducts={setSearchedProducts}
          setError={setError}
        />

        {error && (
          <Text style={styles.errorText}>No se encontraron productos.</Text>
        )}

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
