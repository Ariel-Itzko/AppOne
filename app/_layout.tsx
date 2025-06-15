import { useColorScheme } from '@/hooks/useColorScheme'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { LogBox } from 'react-native'
import 'react-native-reanimated'

LogBox.ignoreAllLogs(true)

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    'Montserrat-Regular': require('../assets/fonts/Montserrat/static/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('../assets/fonts/Montserrat/static/Montserrat-Bold.ttf'),
    'Montserrat-SemiBold': require('../assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf'),
    'Montserrat-Light': require('../assets/fonts/Montserrat/static/Montserrat-Light.ttf'),
  })

  if (!loaded) {
    return null
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
  )}

// המטרה של העמוד הזה היא לטעון פונטים פה, לבטל הודעות שגיאה של סינטקסט שלא יופיעו למשתמש - נמצא בשורה 6 ו9, ולהציג את כל האפליקציה בהתאמה למצב בהירות אם הוא כהה או בהיר
// בנוסף כאן אפשר גם לבטל את הניווט העליון שמוצג למשתמש באפליקציה בפס העליון של המסך - שורות 27-29