import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

const Categories = ({ navigation }) => {
  const categories = ["Todos", "Electrónica", "Deportes", "Fotografía"];

  const handleCategoryPress = (category) => {
    navigation.navigate("ItemListCategory", { category });
  };

  return (
    <>
      <View style={styles.categoryButtons}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryButton}
            onPress={() => handleCategoryPress(category)}
          >
            <Text style={styles.buttonText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  categoryButtons: {
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "start",
    width: "100%",
    gap: 20,
    borderTopWidth: 1,
    borderTopColor: "black",
    marginVertical: 120,
  },
  categoryButton: {
    padding: 20,
    borderRadius: 8,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  buttonText: {
    color: "#3498db",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Categories;
