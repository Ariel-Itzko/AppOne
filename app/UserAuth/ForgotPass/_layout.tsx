import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Slot, Stack, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';




export default function SignUpLayout() {
 
 const router = useRouter();

return (

  
<>

<View style={{ flex: 1 }}>
  <LinearGradient colors={['#3F0E5D', '#510B7F', '#5F039B', '#7B19BA']}
  style={StyleSheet.absoluteFill} />
  <Slot />
</View>

    

<View style={styles.circlesContainer}>
  <View style={[styles.circle, { backgroundColor: 'black' }]} />
  <View style={[styles.circle, { backgroundColor: '#7B19BA'}]} />
</View>

<Stack.Screen name="UserAuth/ForgotPass/Forgot" options={{ headerShown: false }} />

<TouchableOpacity style={styles.backbutton} onPress={() => router.back()}>
  <Ionicons name="arrow-back" size={35} color="white" />
</TouchableOpacity>


</>)}


const styles= StyleSheet.create({
  
backbutton:{
  position: 'absolute',
  marginTop: 100,
  marginLeft: 30,
},

circlesContainer: {
  position: 'absolute',
  flexDirection: 'row',
  top: 90,
  left: 0,       
  right: 0,
  justifyContent: 'center',
  gap: 0 
},

circle: {
  width: 50,
  height: 50,
  borderRadius: 25,
},

container: {
  position: 'absolute',
  bottom: 660,
  left: 0,       
  right: 0,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
},




})
