import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Lexend': require('../assets/fonts/Lexend-Regular.ttf'),
    'Lexend-Medium': require('../assets/fonts/Lexend-Medium.ttf'),
    'Lexend-Bold': require('../assets/fonts/Lexend-Bold.ttf'),
    'Lexend-ExtraBold': require('../assets/fonts/Lexend-ExtraBold.ttf'),
    'Lexend-Black': require('../assets/fonts/Lexend-Black.ttf'),
    'Lexend-Light': require('../assets/fonts/Lexend-Light.ttf'),
    'Lexend-Thin': require('../assets/fonts/Lexend-Thin.ttf'),
    'Lexend-SemiBold': require('../assets/fonts/Lexend-SemiBold.ttf'),
    'Lexend-ExtraLight': require('../assets/fonts/Lexend-ExtraLight.ttf')
  });

  if (!fontsLoaded) return null;

  return (
    <><GestureHandlerRootView>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false, }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="Signin" />
        <Stack.Screen name="Signup" />
        <Stack.Screen name="ForgotPassword"
          options={{
            presentation: 'modal',
            headerShown: false,
            animation: 'fade_from_bottom',
          }}
        />
        <Stack.Screen name="EnterOTP"
          options={{
            presentation: 'modal',
            headerShown: false,
            animation: 'fade_from_bottom',
          }}
        />
        <Stack.Screen name="NewPassword"
          options={{
            presentation: 'modal',
            headerShown: false,
            animation: 'fade_from_bottom',
          }}
        />
      </Stack>
    </GestureHandlerRootView>
    </>
  );
}