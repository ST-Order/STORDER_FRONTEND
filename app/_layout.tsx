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
import CloseIcon from "@/assets/images/xIcon.png";

import { useColorScheme } from "@/components/useColorScheme";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="sign-in"
          options={{
            headerBackVisible: false,
            title: "로그인",
            headerTitleStyle: {},
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="change-pw"
          options={{
            headerBackVisible: false,
            title: "비밀번호 변경",
            headerTitleStyle: {},
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="change-pw-confirm"
          options={{
            headerBackVisible: false,
            title: "비밀번호 변경",
            headerTitleStyle: {},
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen name="term-agreement" options={{ headerShown: false }} />
        <Stack.Screen
          name="sign-up"
          options={{
            headerBackVisible: false,
            title: "회원가입",
            headerTitleStyle: {},
            headerTitleAlign: "center",
          }}
        />
        {/* TODO: 헤더 엑스표시 */}
        <Stack.Screen
          name="notice"
          options={{
            headerBackImageSource: CloseIcon,
            title: "공지사항",
            headerTitleStyle: {},
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="payment"
          options={{
            headerBackImageSource: CloseIcon,
            title: "결제하기",
            headerTitleStyle: {},
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="review-create"
          options={{
            headerBackImageSource: CloseIcon,
            title: "리뷰 작성",
            headerTitleStyle: {},
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="payment-loading"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="order-history-detail"
          options={{
            headerBackImageSource: CloseIcon,
            title: "주문 상세",
            headerTitleStyle: {},
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </ThemeProvider>
  );
}
