import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const ProductDetail = ({ productDetail, onClose }) => {
  return (
    <View style={styles.productDetailContainer}>
      <Image source={{ uri: productDetail.imagen }} style={styles.imagenProducto} />
      <Text style={styles.tituloProducto}>{productDetail.titulo}</Text>
      <Text style={styles.descripcionProducto}>{productDetail.descripcion}</Text>
      <Text style={styles.categoriaProducto}>{productDetail.categoria}</Text>
      <Text style={styles.precioProducto}>Precio: ${productDetail.precio}</Text>
      <Button title='Cerrar' onPress={onClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  // Estilos para ProductDetail
});

export default ProductDetail;
