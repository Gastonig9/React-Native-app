import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import InputForm from "../../components/InputForm/InputForm";
import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit";
import { useLoginMutation } from "../../store/services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";
import { insertSession } from "../../database";

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const [login, { isLoading, isSuccess, data, error, isError }] =
    useLoginMutation();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [visiblePass, setvisiblePass] = useState(true);

  useEffect(() => {
    if (isSuccess) {
      if (data && data.localId) {
        dispatch(setUser({
          localId: data.localId,
          email: data.email,
          idToken: data.idToken,
        }));
        insertSession({
          localId: data.localId,
          email: data.email,
          idToken: data.idToken,
        })
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.error("Data or localId is undefined");
      }
    }
    if (isError) console.log(error);
  }, [data, isError, isSuccess]);

  const onVisible = () => {
    setvisiblePass(!visiblePass);
  };

  const onLogin = () => {
    login({ email: email, password: password });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicia sesión</Text>
      <InputForm
        value={email}
        label="Email"
        onChangText={(email) => setemail(email)}
      />
      <InputForm
        value={password}
        label="Contraseña"
        onChangText={(password) => setpassword(password)}
        isPasswordVisible={visiblePass}
        onTogglePasswordVisibility={onVisible}
      />
      <ButtonSubmit
        title="Login"
        onPressSubmit={onLogin}
        isLoading={isLoading}
      />
      <Text style={styles.noAccount}>¿No tienes una cuenta?</Text>
      <Pressable onPress={() => navigation.navigate("Register")}>
        <Text style={styles.titleRegister}>Registrate</Text>
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
  noAccount: {
    marginTop: 18,
    marginBottom: 12,
    fontWeight: "bold",
  },
  titleRegister: {
    fontWeight: "bold",
    color: "blue",
  },
});
