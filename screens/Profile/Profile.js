import { View, Text, Button, Image, StyleSheet } from "react-native";
import React from "react";
import { useGetProfileImageQuery } from "../../store/services/productService";
import { useSelector } from "react-redux";

export default function Profile({ navigation }) {
  const localId = useSelector((state) => state.auth.value.localId);
  const { data } = useGetProfileImageQuery(localId);
  return (
    <View style={styles.container}>
      <Image
        source={data ? { uri: data.image } : require("../../assets/images/user-dev.jpg")}
        style={styles.profileImage}
        resizeMode="cover"
      />
      <Button
        title="Agregar nueva imagen"
        onPress={() => navigation.navigate("ImageSelector")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
});
