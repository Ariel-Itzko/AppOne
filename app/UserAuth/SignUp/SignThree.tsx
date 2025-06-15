import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';



export default function SignThree() {

  
const [username, setusername] = useState('');
const usernameValid = username.length >= 5;
const router = useRouter();
  


return (

<>
   
   
<Text style={style.MainText}>User Sign Up</Text>
<Text style={style.SubText}>Nice! You have <Text style={style.SubTextPurple}>successfully {'\n'}created</Text> your account.{"\n"}Set a username for your Account.</Text>


<TextInput
    style={style.username}
    placeholder="Your Username"
    onChangeText={(text) => setusername(text)}
    placeholderTextColor="#808080"
    keyboardType="default"
    value={username}
/>   



<TouchableOpacity style={style.usernamebutton} 
onPress={() => {
  if (usernameValid) {
    router.push('/UserAuth/SignUp/SignFour')}
  else {alert('Your username must be at least 5 characters long.');}}}>
    <Text style={style.Confirm}>CONFIRM</Text>
</TouchableOpacity>



<Ionicons
  name="checkmark-circle"
  size={24}
  color="#transparent"
  style={[style.CheckIcon, usernameValid==true && style.ActiveCheckIcon]}
/>





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

SubTextPurple: {
  color: '#d580ff',
  fontSize: 20,
  fontFamily: 'Montserrat-SemiBold',
  marginTop: 30,
  marginLeft: 40,
},

username: {
  height: 47,
  backgroundColor: '#ffffff',
  borderRadius: 20,
  fontSize: 18, 
  color: '#000000',
  marginTop: 35,
  width: '80%',
  alignSelf: 'center',
  paddingHorizontal: 20,
  paddingRight: 60,
},

usernamebutton:{
  backgroundColor: '#AF52DE',
  borderRadius: 25,
  paddingVertical: 12,
  fontFamily: 'Montserrat-SemiBold',
  width: '80%',
  alignSelf: 'center',
  marginTop: 35,
},

Confirm: {
  color: 'white',
  fontSize: 18,
  fontFamily: 'Montserrat-SemiBold',
  textAlign: 'center',
},

CheckIcon:{
  position: 'absolute',
  marginTop: 437,
  marginLeft: 265,
  alignSelf: 'center',
},

ActiveCheckIcon:{
  color: '#AF52DE',
}



})


// העמוד השלישי - מכיל את העיצוב מהלאיאאוט ואת העיצוב שכתוב כאן - נועד על מנת לכתוב שם משתמש