import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';



export default function SignTwo() { 
    
const [showPassword, setShowPassword] = useState(false);
const [password, setPassword] = useState('');
const isPasswordValid = password.length >= 6;
const [password2, setPassword2] = useState('');
const isItValid = password === password2 && isPasswordValid;



return (

<>
     
<Text style={style.MainText}>User Sign Up</Text>
<Text style={style.SubText}>Set a strong & unique password{"\n"}for your Account</Text>


<TextInput
    style={style.PasswordInput}
    placeholder="Password"
    placeholderTextColor="#808080"
    keyboardType="default"
    secureTextEntry={!showPassword}
    value={password}
    onChangeText={setPassword}
/>

<TextInput
    style={style.PasswordInput}
    placeholder="Confirm Password"
    placeholderTextColor="#808080"
    keyboardType="default"
    secureTextEntry={!showPassword}
    value={password2}
    onChangeText={setPassword2}
/>


<TouchableOpacity style={style.Eye1} 
onPress={() => setShowPassword(!showPassword)}>
<Ionicons
name={showPassword ? 'eye-off' : 'eye'}
size={30}
color="#808080"
/></TouchableOpacity>

<TouchableOpacity style={style.Eye2} 
onPress={() => setShowPassword(!showPassword)}>
<Ionicons
name={showPassword ? 'eye-off' : 'eye'}
size={30}
color="#808080"
/></TouchableOpacity>


{isPasswordValid && (
<>
<Ionicons
  name="checkmark-circle"
  size={24}
  color="#00C851"
  style={style.CheckIcon}/>
<Text style={style.OkText}>Your password must be 6 characters or longer</Text>
</>)}

{!isPasswordValid && (
<Text style={style.WarningText}>Your password must be 6 characters or longer</Text>)}

<TouchableOpacity style={style.SetPassword}
onPress={() => {
  if (isItValid) {
    console.log('Passwords match and are valid');}
  else {
    console.log('Passwords do not match or are invalid');}
}} >
<Text style={style.SetPasswordText}>Set Password</Text>
</TouchableOpacity>
   




</>)}

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

PasswordInput: {
  height: 47,
  backgroundColor: '#ffffff',
  borderRadius: 20,
  fontSize: 18, 
  color: '#000000',
  marginTop: 20,
  width: '80%',
  alignSelf: 'center',
  paddingHorizontal: 20,
  paddingRight: 60,
},

Eye1: {
  marginTop: -106,
  marginLeft: 312,
},

Eye2: {
  marginTop: 37,
  marginLeft: 313,
},

CheckIcon:{
  position: 'absolute',
  marginTop: 524,
  marginLeft: 300,
  alignSelf: 'center',
},

WarningText: {
  color: 'white',
  fontSize: 14,
  marginTop: 40,
  marginLeft: 0,
  alignSelf: 'center', 
},

OkText: {
  color:"#00C851",
  fontSize: 14,
  marginTop: 40,
  marginLeft: -45,
  alignSelf: 'center', 
},

SetPassword:{
  backgroundColor: '#AF52DE',
  borderRadius: 25,
  paddingVertical: 12,
  fontFamily: 'Montserrat-SemiBold',
  width: '80%',
  alignSelf: 'center',
  marginTop: 35,
},

SetPasswordText: {
  color: 'white',
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center',
},







})