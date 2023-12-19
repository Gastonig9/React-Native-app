import React from "react";
import { View, Text, Image, StyleSheet, Pressable, Button } from "react-native";

const ProductCard = ({ navigation, producto }) => {

  const handleDetail = (ptitle) => {
    navigation.navigate("ProductDetail", { ptitle });
  };
  return (
    <View style={styles.productoContainer}>
      <Image source={{ uri: producto.imagen }} style={styles.imagenProducto} />
      <Text style={styles.tituloProducto}>{producto.titulo}</Text>
      <Text style={styles.descripcionProducto}>{producto.descripcion}</Text>
      <Text style={styles.categoriaProducto}>{producto.categoria}</Text>
      <Text style={styles.precioProducto}>
        Precio: ${producto.precio.toFixed(2)}
      </Text>
      <Pressable style={styles.verDetalle}>
        <Button title="Ver detalle" onPress={() => handleDetail(producto.titulo)} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  productoContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 60,
  },
  imagenProducto: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    marginBottom: 10,
  },
  tituloProducto: {
    fontSize: 18,
    fontWeight: "bold",
  },
  descripcionProducto: {
    fontSize: 14,
    marginBottom: 10,
  },
  precioProducto: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
});

export default ProductCard;
