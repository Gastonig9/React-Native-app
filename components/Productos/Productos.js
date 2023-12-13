import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, Button } from "react-native";
import ProductCard from "../ProductCard/ProductCard";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import ProductDetail from "../ProductDetail/ProductDetail";

const Productos = ({ dataProductos }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [error, setError] = useState(false);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [seeDetail, setseeDetail] = useState(false);
  const [productDetail, setproductDetail] = useState({});

  const handleCategoryButtonClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    if (selectedCategory !== "Todos") {
      const filteredCategoryProducts = dataProductos.filter(
        (p) => p.categoria === selectedCategory
      );
      setFilteredProducts(filteredCategoryProducts);
    } else {
      setFilteredProducts(dataProductos);
    }
  }, [selectedCategory, dataProductos]);

  const renderProduct = ({ item }) => (
    <ProductCard
      producto={item}
      setseeDetail={setseeDetail}
      setProductDetail={setproductDetail}
    />
  );

  return (
    <>
      {seeDetail ? (
          <ProductDetail productDetail={productDetail} onClose={() => setseeDetail(false)} />
      ) : (
        <View style={styles.productosContain}>
          <Header titleHeader={`Categoria: ${selectedCategory}`} />
          <View style={styles.categoryButtons}>
            <Button
              title="Todos"
              onPress={() => handleCategoryButtonClick("Todos")}
            />
            <Button
              title="Electrónica"
              onPress={() => handleCategoryButtonClick("Electrónica")}
            />
            <Button
              title="Deportes"
              onPress={() => handleCategoryButtonClick("Deportes")}
            />
            <Button
              title="Fotografía"
              onPress={() => handleCategoryButtonClick("Fotografía")}
            />
          </View>
          <SearchBar
            dataProducts={dataProductos}
            setSearchedProducts={setSearchedProducts}
            setError={setError}
          />

          {error && (
            <Text style={styles.errorText}>No se encontraron productos.</Text>
          )}

          <FlatList
            data={
              searchedProducts.length > 0 ? searchedProducts : filteredProducts
            }
            renderItem={renderProduct}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  productosContain: {
    overflow: "scroll",
  },
  categoryButtons: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginVertical: 20,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    fontSize: 16,
    marginTop: 10,
  },
});

export default Productos;
