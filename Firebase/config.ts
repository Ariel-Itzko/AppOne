import { initializeApp } from 'firebase/app';
import { initializeAuth } from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyAUi2glk8cV-n1m42A5Z8oaJslZNa-7vGs",
  authDomain: "appone-bd218.firebaseapp.com",
  databaseURL: "https://appone-bd218-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "appone-bd218",
  storageBucket: "appone-bd218.appspot.com",
  messagingSenderId: "325124214264",
  appId: "1:325124214264:web:1d9f942746c4e54548da0d",
  measurementId: "G-19ENKMC6CC"
}

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app)


