import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyAUi2glk8cV-n1m42A5Z8oaJslZNa-7vGs",
  authDomain: "appone-bd218.firebaseapp.com",
  projectId: "appone-bd218",
  storageBucket: "appone-bd218.firebasestorage.app",
  messagingSenderId: "325124214264",
  appId: "1:325124214264:web:1d9f942746c4e54548da0d",
  measurementId: "G-19ENKMC6CC"
};

export const app = initializeApp(firebaseConfig)
export const database = getDatabase(app);
export const auth = getAuth(app);

