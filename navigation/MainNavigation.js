import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./navigator";
import AuthStack from "./AuthStack";
import { useSelector } from "react-redux";

export default function MainNavigation() {
  const idToken = useSelector(state => state.auth.value.idToken)
  return (
    <NavigationContainer>
      {idToken ? <Navigator /> : <AuthStack/>}
    </NavigationContainer>
  );
}
