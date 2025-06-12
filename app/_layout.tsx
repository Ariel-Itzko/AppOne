import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import 'react-native-reanimated';

LogBox.ignoreLogs(['Text strings must be rendered within a <Text> component']);

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
  'Montserrat-Regular': require('../assets/fonts/Montserrat/static/Montserrat-Regular.ttf'),
  'Montserrat-Bold': require('../assets/fonts/Montserrat/static/Montserrat-Bold.ttf'),
  'Montserrat-SemiBold': require('../assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf'),
  'Montserrat-Light': require('../assets/fonts/Montserrat/static/Montserrat-Light.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="UserAuth/Login/login" options={{ headerShown: false }} />
        <Stack.Screen name="(Tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
