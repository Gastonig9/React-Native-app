// ItemListCategory.js
import React, { useEffect, useState } from "react";
import { productos } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { handleCategory } from "../../features/products/productSlice";
import { FlatList, StyleSheet, View, Text } from "react-native";

export default function ItemListCategory({ route }) {
  const { category } = route.params;
  const productCategory = useSelector((state) => state.products.value.productCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleCategory(category))
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Text style={styles.productTitle}>{item.titulo}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>Categoría: {category}</Text>
      <FlatList
        data={productCategory}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
