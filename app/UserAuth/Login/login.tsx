import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function LoginScreen() {

    return (
        <LinearGradient
        colors={['#1a1a1a', '#f2f2f2']}
        style={styles.container} 
        />
    );
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
    },
});