import React from "react";
import { StyleSheet, View, Button } from "react-native";

const ProductCategory = ({ onSelectCategory }) => {
  const categories = ["Todos", "Electrónica", "Deportes", "Fotografía"];

  return (
    <View style={styles.categoryButtons}>
      {categories.map((category, index) => (
        <Button
          key={index}
          title={category}
          onPress={() => onSelectCategory(category)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryButtons: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginVertical: 20,
  },
});

export default ProductCategory;
