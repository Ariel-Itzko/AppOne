import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function LoginScreen() {   // The Whole Screen Part


    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    


return (

<View style={{ flex: 1 }}>
    <LinearGradient
      colors={['#3F0E5D', '#510B7F', '#5F039B', '#7B19BA']} 
      style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
      />
 <View style={art.circlesContainer}>
    <View style={[art.circle, { backgroundColor: 'black' }]} />
    <View style={[art.circle, { backgroundColor: '#7B19BA'}]} />
</View>

<Text style={art.MainText}>Hello,</Text>
<Text style={[art.SubText, { marginTop: 20 }]}>Be part of <Text style={art.SubTextPurple}>CreatorCenter</Text></Text><Text style={art.SubText}>Your Daily BOOST of content ideas,{'\n'}tips and inspiration from leading {'\n'}Content Creators</Text>

<TextInput
    style={art.EmailInput}
    placeholder="Enter your email address"
    placeholderTextColor="#808080"
    keyboardType="email-address"
    value={email}
    onChangeText={(text) => {setEmail(text); setEmailError('');}}/>
{emailError !== '' && (
  <Text style={{ color: 'red', marginLeft: 50, marginTop: 13 }}>
    {emailError}
  </Text>
)}

<TextInput
    style={art.PasswordInput}
    placeholder="Password"
    placeholderTextColor="#808080"
    keyboardType="email-address"
    secureTextEntry={!showPassword}
/>

<TouchableOpacity style={art.Eye} 
onPress={() => setShowPassword(!showPassword)}>
<Ionicons
name={showPassword ? 'eye-off' : 'eye'}
size={30}
color="#808080"
/> </TouchableOpacity>

 
<TouchableOpacity style={art.SignInButton} onPress={() => {
    if (validateEmail(email)) {
      setEmailError('');
      console.log('Email Is Valid');
    } else {
      setEmailError('Invalid email address');
      console.log('Email Is Invalid');
    }
  }}
>
  <Text style={art.SignInButtonText}>Sign In</Text>
</TouchableOpacity>
  

<TouchableOpacity onPress={() => console.log('Forgot Password')}>
<Text style={art.Forget}>Forgot Your Password?</Text>
</TouchableOpacity>


<Text style={art.DontAccount}>Don't have an account yet?</Text>

<TouchableOpacity onPress={() => router.push('/UserAuth/SignUp/SignOne')}>
<Text style={art.SignUp}>Sign Up Here</Text>
</TouchableOpacity>

<Text style={art.SignWith}>Sign in with your account</Text>


<View style={art.socialbuttonscontainer}>
    <TouchableOpacity style={art.socialbuttons}
        onPress={() => console.log('Login with Google')} >
        <Ionicons name="logo-google" size= {30} color="#AF52DE" />
     </TouchableOpacity>
    
     <TouchableOpacity style={art.socialbuttons}
      onPress={() => console.log('Login with Apple')}>
     <Ionicons name="logo-apple" size={30} color="black" />
     </TouchableOpacity>
</View>


</View>
  )
  }
    
  // CSS PART

  const art = StyleSheet.create ({
    circlesContainer: {
        flexDirection: 'row',
        marginTop: 90,
        justifyContent: 'center',
        gap: 0 // gap between the circles
    },

    circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },

    MainText: {
        color: 'white',
        fontSize: 50,
        fontFamily: 'Montserrat-Bold',
        marginTop: 25,
        marginLeft: 40,
    },

    SubText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold',
        marginTop: 0,
        marginLeft: 40,
    }, 

    SubTextPurple: {
        color: '#d580ff',
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold',
        marginTop: 30,
        marginLeft: 40,
    }, 

    EmailInput: {
        height: 47,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        fontSize: 18, 
        color: '808080',
        marginTop: 30,
        width: '80%',
        alignSelf: 'center',
        paddingHorizontal: 20,
    },

    PasswordInput: {
        height: 47,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        fontSize: 18, 
        color: '808080',
        marginTop: 20,
        width: '80%',
        alignSelf: 'center',
        paddingHorizontal: 20,
        paddingRight: 60,
    },

    Eye: {
        marginTop: -38,
        marginLeft: 312,
    },

    SignInButton:{
    backgroundColor: '#AF52DE',
    borderRadius: 25,
    paddingVertical: 12,
    fontFamily: 'Montserrat-SemiBold',
    width: '80%',
    alignSelf: 'center',
    marginTop: 65,
    },

    SignInButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    },

    Forget: {
        color: '#5AC8FA',
        fontSize: 14,
        fontFamily: 'Montserrat-regular',
        marginTop: -85,
        marginLeft: 0,
        alignSelf: 'center',
    },

DontAccount: {
      color: 'white',
        fontSize: 14,
        fontFamily: 'Montserrat-regular',
        marginTop: 15,
        marginLeft: 0,
        alignSelf: 'center',
},

SignUp: {
      color: '#d580ff',
        fontSize: 14,
        fontFamily: 'Montserrat-regular',
        marginTop: 5,
        marginLeft: 0,
        alignSelf: 'center',
},

SignWith: {
      color: 'white',
        fontSize: 14,
        fontFamily: 'Montserrat-regular',
        marginTop: 30,
        marginLeft: 0,
        alignSelf: 'center',
},

socialbuttonscontainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  gap: 20,
  marginTop: 30,
},

socialbuttons: {
  width: 60,
  height: 60,
  borderRadius: 30,
  backgroundColor: 'white',
  justifyContent: 'center',
  alignItems: 'center',
},











  }
)