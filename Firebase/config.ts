import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth/react-native';

const firebaseConfig = {
  apiKey: "AIzaSyAUi2glk8cV-n1m42A5Z8oaJslZNa-7vGs",
  authDomain: "appone-bd218.firebaseapp.com",
  databaseURL: "https://appone-bd218-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "appone-bd218",
  storageBucket: "appone-bd218.firebasestorage.app",
  messagingSenderId: "325124214264",
  appId: "1:325124214264:web:1d9f942746c4e54548da0d",
  measurementId: "G-19ENKMC6CC"
}

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
