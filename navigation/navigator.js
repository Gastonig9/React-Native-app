import HomeStack from "./HomeStack";
import CartStack from "./CartStack";
import ProfileStack from "./ProfileStack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import AuthStack from "./AuthStack";

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBarContain
        }}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarIcon: () => <Entypo name="home" size={30} color= "white" />,
          }}
        />
        <Tab.Screen
          name="CartStack"
          component={CartStack}
          options={{
            tabBarIcon: () => <Entypo name="shopping-cart" size={30} color="white" />,
          }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarIcon: () => <FontAwesome name="user" size={30} color="white" />,
          }}
        />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarContain: {
    backgroundColor: "#3498db",
    color: "white"
  }
});
