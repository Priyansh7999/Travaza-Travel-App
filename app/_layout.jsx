import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

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
    <>
    <StatusBar style="auto"/>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="Signin" options={{ headerShown: false }} />
        <Stack.Screen name="Signup" options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" options={{ headerShown: false }} />
      </Stack>
    </>

  );
}