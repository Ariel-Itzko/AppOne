import { useRouter } from 'expo-router';
import { Text } from 'react-native';


import app from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';


export default function SignTwoTwo(){


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


const router = useRouter();

 if (!app.apps.length) {
    app.initializeApp(firebaseConfig);
  }
const firebaseAuth = auth();
// const handleSignUp = async () => {
  //try {
    //await createUserWithEmailAndPassword(auth, email, password);
    //console.log('User The user has been created');
    //router.push('/UserAuth/SignUp/SignThree')
    //} catch (error: any) {
      //console.log('Error In Firebase Sign Up', error.message);
      //alert('Error In Firebase Sign Up' + error.message);
    //}
  //}

  return (
    <Text>Hello World !</Text>

  );
}