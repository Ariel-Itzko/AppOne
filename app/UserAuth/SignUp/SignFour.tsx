import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';


export default function SignThree() {
  

const router = useRouter(); 

  
return (
<>
   
   
<Text style={style.MainText}>Sign Up Success</Text>
<Text style={style.SubText}><Text style={style.SubTextPurple}>Congratulations!</Text>{"\n"}You have successfully created{"\n"}Your Account</Text>
   

<Image
  source={require('../../../assets/images/Rocket.png')}
  style={style.image}
/>

<TouchableOpacity style={style.SignInButton} 
onPress={() => {
    router.push('/UserAuth/Login/login')}}>
    <Text style={style.SignInButtonText}>Go to Sign In</Text>
</TouchableOpacity>



</>)}

const style= StyleSheet.create({

MainText: {
  color: 'white',
  fontSize: 30,
  fontFamily: 'Montserrat-Bold',
  marginTop: 270,
  marginLeft: 0,
  alignSelf: 'center',
},

SubText: {
  color: 'white',
  fontSize: 18,
  fontFamily: 'Montserrat-SemiBold',
  marginTop: 20,
  marginLeft: 0,
  textAlign: 'center',
  alignSelf: 'center',
}, 

SubTextPurple: {
  color: '#d580ff',
  fontSize: 20,
  fontFamily: 'Montserrat-SemiBold',
  marginTop: 30,
  marginLeft: 0,
}, 

 image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 32,
 },

SignInButton:{
  backgroundColor: '#AF52DE',
  borderRadius: 25,
  paddingVertical: 12,
  fontFamily: 'Montserrat-SemiBold',
  width: '80%',
  alignSelf: 'center',
  marginTop: 35,
},

SignInButtonText: {
  color: 'white',
  fontSize: 18,
  fontFamily: 'Montserrat-SemiBold',
  textAlign: 'center',
},




})
