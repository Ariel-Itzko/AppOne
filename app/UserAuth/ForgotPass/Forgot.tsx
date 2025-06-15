import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';




export default function Forgot() {

  const [email, setEmail] = useState('');
  const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email); }
  const router = useRouter();


return (
<>


<Text style={style.MainText}>Forgot Password</Text>
<Text style={style.SubText}>Reset your password by{"\n"}Signing in to your email</Text>


<TextInput
    style={style.EmailInput}
    placeholder="Enter your email address"
    placeholderTextColor="#808080"
    keyboardType="email-address"
    value={email}
    onChangeText={(text) => {setEmail(text);}}/>


<Text style={style.regularText}>We will send you a 6 Digit Verification Code to{"\n"}your email. Make sure to check your{"\n"}inbox and other folders</Text>


<TouchableOpacity style={style.ResetButton} onPress={() => {
  if (validateEmail(email)) {
  alert('Reset your password using the email we just sent you')}
  else {
  alert('Please enter a valid email address')
  console.log('Email Is Invalid'); }}}>
  <Text style={style.Resettext}>Send Reset Link</Text>
</TouchableOpacity>


</>)}


const style= StyleSheet.create({

MainText: {
  color: 'white',
  fontSize: 35,
  fontFamily: 'Montserrat-Bold',
  marginTop: 200,
  marginLeft: 0,
  alignSelf: 'center',
  textAlign: 'center',
},

SubText: {
  color: 'white',
  fontSize: 18,
  fontFamily: 'Montserrat-SemiBold',
  marginTop: 13,
  marginLeft: 0,
  alignSelf: 'center',
  textAlign: 'center',
}, 

regularText: {
  color: 'white',
  fontSize: 14,
  fontFamily: 'Montserrat-SemiBold',
  marginTop: 30,
  marginLeft: 0,
  alignSelf: 'center',
  textAlign: 'center',
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

ResetButton: { 
  backgroundColor: '#AF52DE',
  borderRadius: 25,
  height: 50,
  fontFamily: 'Montserrat-SemiBold',
  width: '80%',
  alignSelf: 'center',
  marginTop: 40,
},

Resettext: {
  color: 'white',
  fontSize: 18,
  fontFamily: 'Montserrat-SemiBold',
  textAlign: 'center',
  marginTop: 12,
},



})
  

// עמוד של שכחתי סיסמא שמוודא אם האימייל שכתבנו הוא נכון כמו בעמודים אחרים, ושולח התראה מתאימה אם המייל נכון או לא



