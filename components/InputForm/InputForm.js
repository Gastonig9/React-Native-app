import React from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function InputForm({ label, value, onChangText, isPasswordVisible, onTogglePasswordVisibility, error }) {
  const iconMap = {
    Contraseña: "dial-pad",
    Email: "email",
    default: "user",
  };

  const iconName = iconMap[label] || iconMap.default;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <Entypo name={iconName} size={24} color="#888888" style={styles.icon} />
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangText}
          placeholder={`Ingresa tu ${label.toLowerCase()}`}
          placeholderTextColor="#888888"
          secureTextEntry={isPasswordVisible}
        />
        {label === "Contraseña" && (
          <Pressable onPress={onTogglePasswordVisibility} style={styles.icon}>
            <Entypo
              name={isPasswordVisible ? "eye-with-line" : "eye"}
              size={24}
              color="#888888"
            />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#333333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333333",
  },
  icon: {
    marginRight: 8,
  },
});

