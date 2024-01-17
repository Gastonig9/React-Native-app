import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRegisterMutation } from "../../store/services/authService";
import InputForm from "../../components/InputForm/InputForm";
import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit";

export default function Register({ navigation }) {
  const [ register, {isLoading, isSuccess, data, error, isError} ] = useRegisterMutation()
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [visiblePass, setvisiblePass] = useState(true);


  useEffect(() => {
    if (isSuccess) {
      navigation.navigate("Login");
    }
    if (isError) {
      console.log("Ocurrio un error al registrarse", error)
    }
  }, [isSuccess, data, navigation]);
  
  

  const onVisible = () => {
    setvisiblePass(!visiblePass);
  };

  const onRegister = () => {
    const newUser = {
      name: name,
      email: email,
      password: password
    }
    if (isError) {
      console.log("Ocurrio un error al registrarse", error)
    }
    register(newUser)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <InputForm
        label="Nombre completo"
        value={name}
        onChangText={(name) => setname(name)}
      />
      <InputForm
        label="Email"
        value={email}
        onChangText={(email) => setemail(email)}
      />
      <InputForm
        label="Contraseña"
        value={password}
        onChangText={(pass) => setpassword(pass)}
        isPasswordVisible={visiblePass}
        onTogglePasswordVisibility={onVisible}
      />
      <ButtonSubmit title="Registrarse" onPressSubmit={onRegister} />
      <Text style={styles.noRegister}>¿Ya estas registrado?</Text>
      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text style={styles.titleLogin}>Inicia sesion</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333333",
  },
  noRegister: {
    marginTop: 18,
    marginBottom: 12,
    fontWeight: "bold",
  },
  titleLogin: {
    fontWeight: "bold",
    color: "blue",
  },
});
