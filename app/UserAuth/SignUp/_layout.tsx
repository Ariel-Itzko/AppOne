import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Slot, Stack, usePathname, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';




export default function SignUpLayout() {
 
  const router = useRouter();
  const pathname = usePathname();
  const ActiveSteps = () => {
  if (pathname.includes('SignOne')) return 1;
  if (pathname.includes('SignTwo')) return 2;
  if (pathname.includes('SignThree')) return 3;
  if (pathname.includes('SignFour')) return 4;
  return 0;};
  const steps = ActiveSteps();
 
  return (

  
<View style={{ flex: 1 }}>

<View style={{ flex: 1 }}>
  <LinearGradient colors={['#3F0E5D', '#510B7F', '#5F039B', '#7B19BA']}
  style={StyleSheet.absoluteFill} />
  <Slot />
</View>

    

<View style={styles.circlesContainer}>
  <View style={[styles.circle, { backgroundColor: 'black' }]} />
  <View style={[styles.circle, { backgroundColor: '#7B19BA'}]} />
</View>

<Stack.Screen name="UserAuth/SignUp/SignOne" options={{ headerShown: false }} />
<Stack.Screen name="UserAuth/SignUp/SignTwo" options={{ headerShown: false }} />
<Stack.Screen name="UserAuth/SignUp/SignThree" options={{ headerShown: false }} />
<Stack.Screen name="UserAuth/SignUp/SignFour" options={{ headerShown: false }} />


<TouchableOpacity style={styles.backbutton} onPress={() => router.back()}>
  <Ionicons name="arrow-back" size={35} color="white" />
</TouchableOpacity>

   

<View style={styles.container}>

<View style={[styles.upcircle, steps >= 1 ? styles.activeCircle : styles.inactiveCircle]} />
<View style={styles.line} />
   
<View style={[styles.upcircle, steps >= 2 ? styles.activeCircle : styles.inactiveCircle]} />
<View style={styles.line} />

<View style={[styles.upcircle, steps >= 3 ? styles.activeCircle : styles.inactiveCircle]} />
<View style={styles.line} />

<View style={[styles.upcircle, steps >= 4 ? styles.activeCircle : styles.inactiveCircle]} />

</View>



</View>
)}


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

upcircle: {
  width: 25,
  height: 25,
  borderRadius: 12.5,
  borderWidth: 3,
  borderColor: '#7B19BA',
  backgroundColor: 'transparent',
},

activeCircle: {
  backgroundColor: '#7B19BA',
},

inactiveCircle: {
  backgroundColor: 'transparent',
},

line: {
  width: 30,
  height: 4,
  backgroundColor: '#7B19BA',
},





})
