import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import ContactScreen from './src/screens/contactScreen.js';
import CallingScreen from './src/screens/contactScreen.js/callingScreeen/index.js';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <CallingScreen />
    </View>
  );
}

const styles = StyleSheet.create({});
