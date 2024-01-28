import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./navigator";
import AuthStack from "./AuthStack";
import { useDispatch, useSelector } from "react-redux";
import { fechSession } from "../database";
import { setUser } from "../features/auth/authSlice";

export default function MainNavigation() {
  const dispatch = useDispatch()
  const idToken = useSelector((state) => state.auth.value.idToken);

  useEffect(() => {
    (async () => {
      try {
        const session = await fechSession();
        if (session.rows.length) {
          const user = session.rows._array[0];
          dispatch(setUser({
            localId: user.localId,
            email: user.email,
            idToken: user.idToken,
          }));
          console.log("el user", user)
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <NavigationContainer>
      {idToken ? <Navigator /> : <AuthStack />}
    </NavigationContainer>
  );
}
