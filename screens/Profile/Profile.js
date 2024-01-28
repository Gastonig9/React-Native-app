import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from "react-native";
import React from "react";
import { useGetProfileImageQuery } from "../../store/services/productService";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllSession } from "../../database";
import { clearUser } from "../../features/auth/authSlice";

export default function Profile({ navigation }) {
  const localId = useSelector((state) => state.auth.value.localId);
  const { data } = useGetProfileImageQuery(localId);
  const dispatch = useDispatch();

  const onLogout = () => {
    deleteAllSession().then((result) => console.log(result));
    dispatch(clearUser());
  };

  return (
    <View style={styles.container}>
      <Image
        source={
          data
            ? { uri: data.image }
            : require("../../assets/images/user-dev.jpg")
        }
        style={styles.profileImage}
        resizeMode="cover"
      />
      <Button
        title="Agregar nueva imagen"
        onPress={() => navigation.navigate("ImageSelector")}
      />
      {localId && (
        <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      )}
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
  logoutButton: {
    backgroundColor: "red", // Puedes cambiar el color según tu preferencia
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  logoutButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
