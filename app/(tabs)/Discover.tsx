import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function Discover() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.blackBox} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,           // כדי שה-ScrollView יתפוס את כל הגובה
    justifyContent: 'center', // למרכז אנכית
    alignItems: 'center',     // למרכז אופקית
    padding: 20,
  },
  blackBox: {
    width: 100,
    height: 180,
    backgroundColor: 'black',
  },
});
