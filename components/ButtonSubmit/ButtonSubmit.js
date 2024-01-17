import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function ButtonSubmit({ title, onPressSubmit, isLoading }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={onPressSubmit}
        android_ripple={{ color: "#CCCCCC" }}
      >
        {isLoading ? (
          <Text style={styles.buttonText}>Cargando</Text>
          ) : (
          <Text style={styles.buttonText}>{title}</Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  button: {
    backgroundColor: "#3498db",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#ffffff",
  },
});
