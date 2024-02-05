import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from "react-native";
import { handleProductDetail } from "../../features/products/productSlice";
import { addProduct } from "../../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useAddToCartMutation } from "../../store/services/cartService";

const ProductDetail = ({ route }) => {
  const { ptitle } = route.params
  const productDetail = useSelector((state) => state.products.value.productDetail);
  const [isSuccess, setisSuccess] = useState(false)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleProductDetail(ptitle))
  }, [])

  const addToCart = (prod) => {
    dispatch(addProduct(prod));
    setisSuccess(true)
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.productDetailContainer}>
        <Pressable style={styles.addToCartButton} onPress={() => addToCart(productDetail)}>
          <Text style={styles.addToCartButtonText}>Agregar al carrito</Text>
        </Pressable>
        {isSuccess && <Text style={styles.addSuccess}>Producto agregado correctamente</Text>}
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  addSuccess: {
    color: "green",
    fontSize: 18,
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
  },
  productDetailContainer: {
    marginVertical: 0,
    padding: 20,
    gap: 20,
  },
  addToCartButton: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  addToCartButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
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
