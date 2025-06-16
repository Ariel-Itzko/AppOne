import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';




export default function SignOne() {

  const [email, setEmail] = useState('');
  const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email); }
  const router = useRouter();


return (

<>

<Text style={style.MainText}>User Sign Up</Text>
<Text style={style.SubText}>Get started on your Journey{"\n"}with us!</Text>


<TextInput
    style={style.EmailInput}
    placeholder="Enter your email address"
    placeholderTextColor="#808080"
    keyboardType="email-address"
    value={email}
    onChangeText={(text) => {setEmail(text);}}/>



<Text style={style.regularText}>Sign up using a valid email address.{"\n"}This will be used for creating your own{"\n"}Account.</Text>



<TouchableOpacity style={style.ConfirmButton} onPress={() => {
  if (validateEmail(email)) {
  router.push({ pathname: '../SignTwo', params: { email }})}
  else {
  alert('Please enter a valid email address')
  console.log('Email Is Invalid'); }}}>
  <Text style={style.confirmtext}>Confirm Email</Text>
</TouchableOpacity>




</>
)}




const style= StyleSheet.create({

MainText: {
  color: 'white',
  fontSize: 30,
  fontFamily: 'Montserrat-Bold',
  marginTop: 270,
  marginLeft: 40,
},

SubText: {
  color: 'white',
  fontSize: 18,
  fontFamily: 'Montserrat-SemiBold',
  marginTop: 13,
  marginLeft: 40,
}, 

regularText: {
  color: 'white',
  fontSize: 14,
  fontFamily: 'Montserrat-SemiBold',
  marginTop: 13,
  marginLeft: 40,
},

EmailInput: {
  height: 47,
  backgroundColor: '#ffffff',
  borderRadius: 20,
  fontSize: 18, 
  color: '000000',
  marginTop: 30,
  width: '80%',
  alignSelf: 'center',
  paddingHorizontal: 20,
},

ConfirmButton: { 
  backgroundColor: '#AF52DE',
  borderRadius: 25,
  height: 50,
  fontFamily: 'Montserrat-SemiBold',
  width: '80%',
  alignSelf: 'center',
  marginTop: 40,
},

confirmtext: {
  color: 'white',
  fontSize: 18,
  fontFamily: 'Montserrat-SemiBold',
  textAlign: 'center',
  marginTop: 12,
},



    
})

// העמוד הראשון מכיל את העיצוב מהלאייאאוט בנוסף
// <> </> הסימנים האלה גורמים לזה שיהיה אפשר להכניס הרבה פונקציות וטקסטים ולא אחת - כותבים את הסגור בלי הסלייש בהתחלה ועם כותבים בסוף
  




