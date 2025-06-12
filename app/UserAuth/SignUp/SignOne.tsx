import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function SignOne() {




  return (
    <>
<View style={{ flex: 1,}}>
    <Text style={style.MainText}>Hello World !</Text>
  </View>
    </>
  ) 
}

const style= StyleSheet.create({


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





    
    })
  




