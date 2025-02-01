import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import Logo from "@/assets/icons/logo_vertical.svg";

import { useColorScheme } from "@/components/useColorScheme";

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: "(tabs)/index",
// };

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const [loaded, error] = useFonts({
  //   SpaceMono: require("../../../assets/fonts/SpaceMono-Regular"),
  //   ...FontAwesome.font,
  // });

  // // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  // useEffect(() => {
  //   if (error) throw error;
  // }, [error]);

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: (props) => <Logo width={150} height={30} />,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="notice-list"
          options={{
            title: "공지사항",
            headerTitleStyle: {},
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="menu-inquiry"
          options={{
            title: "메뉴 조회",
            headerTitleStyle: {},
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="menu-detail-inquiry"
          options={{
            title: "메뉴 조회",
            headerTitleStyle: {},
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="review"
          options={{
            title: "리뷰 조회",
            headerTitleStyle: {},
            headerTitleAlign: "center",
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
