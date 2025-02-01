import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Home_Active from "@/assets/icons/home_active.svg";
import Home_Inactive from "@/assets/icons/home_inactive.svg";
import Order_Active from "@/assets/icons/order_active.svg";
import Order_Inactive from "@/assets/icons/order_inactive.svg";
import Cart_Active from "@/assets/icons/cart_active.svg";
import Cart_Inactive from "@/assets/icons/cart_inactive.svg";
import Mypage_Active from "@/assets/icons/mypage_active.svg";
import Mypage_Inactive from "@/assets/icons/mypage_inactive.svg";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import COLOR from "@/styles/color";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,

        tabBarActiveTintColor: COLOR.blue3,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "홈",
          tabBarIcon: ({ focused }) =>
            focused ? <Home_Active /> : <Home_Inactive />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: "주문현황",
          headerStyle: {
            height: 55,
          },
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) =>
            focused ? <Order_Active /> : <Order_Inactive />,
          // headerShown: false,
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "장바구니",
          headerStyle: {
            height: 55,
          },
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) =>
            focused ? <Cart_Active /> : <Cart_Inactive />,
        }}
      />
      <Tabs.Screen
        name="(my-page)"
        options={{
          title: "마이페이지",
          tabBarIcon: ({ focused }) =>
            focused ? <Mypage_Active /> : <Mypage_Inactive />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
