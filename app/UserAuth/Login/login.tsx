import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function LoginScreen() {   // The Whole Screen Part

    const [showPassword, setShowPassword] = useState(false);
   
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
/>

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

 
  <TouchableOpacity style={art.SignInButton}
   onPress={()=> console.log('Login pressed')}>
  
  <Text style={art.SignInButtonText}>Sign In</Text>
  </TouchableOpacity>

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
        marginTop: 60,
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
        color: '#AF52DE',
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
        marginTop: 30,
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
    marginTop: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    },

    SignInButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
}






  }
)