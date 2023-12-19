import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { productos } from "../../constants/constants";

const ProductDetail = ({ route }) => {
  const { ptitle } = route.params
  const [productDetail, setproductDetail] = useState({})

  useEffect(() => {
    const getProduct = productos.find((p) => p.titulo === ptitle)
    if(getProduct) {
      setproductDetail(getProduct)
    }else{
      console.log("ningun producto")
    }

  }, [])
  
  return (
    <View style={styles.productDetailContainer}>
      <Image
        source={{ uri: productDetail.imagen || "https://i.ibb.co/X7xQdCp/no-img.jpg" }}
        style={styles.imagenProducto}
      />
      <Text style={styles.tituloProducto}>{productDetail.titulo}</Text>
      <Text style={styles.descripcionProducto}>
        {productDetail.descripcion}
      </Text>
      <Text style={styles.categoriaProducto}>{productDetail.categoria}</Text>
      <Text style={styles.precioProducto}>Precio: ${productDetail.precio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  productDetailContainer: {
    marginVertical: 60,
    padding: 20,
    gap: 20,
  },
  tituloProducto: {
    fontSize: 40,
    fontFamily: "Lobster",
    color: "brown",
  },
  descripcionProducto: {
    fontFamily: "Lobster",
  },
  categoriaProducto: {
    fontSize: 25,
    color: "brown",
    fontFamily: "Lobster",
  },
  precioProducto: {
    fontFamily: "Lobster",
    fontSize: 19,
    color: "green",
  },
  imagenProducto: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    marginBottom: 10,
  },
});

export default ProductDetail;
