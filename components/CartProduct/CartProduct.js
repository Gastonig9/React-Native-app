import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../features/cart/cartSlice"; 
import { EvilIcons } from "@expo/vector-icons";

const CartProduct = () => {
  const cart = useSelector((state) => state.cart.value.items);
  const dispatch = useDispatch()

  const handleRemoveItem = (itemId) => {
    dispatch(removeProduct(itemId))
  };

  return (
    <View style={styles.container}>

      { cart && cart.length > 0 ? (
        <FlatList
          data={cart}
          keyExtractor={(item) => item?.titulo}
          renderItem={({ item }) => (
            <View style={styles.productContainer}>
              <Image
                source={{ uri: item?.imagen }}
                style={styles.productImage}
              />
              <View style={styles.productDetails}>
                <Text style={styles.productTitle}>{item?.titulo}</Text>
                <Text style={styles.productDescription}>
                  {item?.descripcion}
                </Text>
                <Text style={styles.productCategory}>
                  Categoría: {item?.categoria}
                </Text>
                <Text style={styles.productPrice}>Precio: ${item?.precio}</Text>
                <Text style={styles.productQuantity}>
                  Cantidad: {item?.quantity}
                </Text>
              </View>
              <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
                <View style={styles.removeButton}>
                  <EvilIcons name="trash" size={30} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <Text>El carrito esta vacio</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  productContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productDescription: {
    marginBottom: 5,
    color: "#555",
  },
  productCategory: {
    color: "#777",
  },
  productPrice: {
    color: "green",
  },
  productQuantity: {
    color: "#3498db",
  },
  removeButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CartProduct;
