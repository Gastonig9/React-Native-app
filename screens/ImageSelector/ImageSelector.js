import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useSelector } from "react-redux";
import { usePostProfileImageMutation } from "../../store/services/productService";

export default function ImageSelector({ navigation }) {
  const [image, setImage] = useState("");
  const localId = useSelector((state) => state.auth.value.localId);
  const [saveImg, { isSuccess, data, isError, error }] =
    usePostProfileImageMutation(localId);

//   useEffect(() => {
    
//   }, [third]);

  const pickImage = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (granted) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.3,
        base64: true,
      });

      if (!result.canceled) {
        setImage("data:image/jpeg;base64," + result.assets[0].base64);
      }
    }
  };

  const confirmImage = () => {
    saveImg({ localId: localId, image: image });
    navigation.navigate("Profile");
    if (isError) {
      console.error(`Ocurrio un error: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={
          image ? { uri: image } : require("../../assets/images/no-img.jpg")
        }
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.buttonContainer}>
        <Button title="Tomar foto" onPress={pickImage} style={styles.button} />
        <Button
          title="Confirmar foto"
          onPress={confirmImage}
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  button: {
    width: "40%",
  },
});
