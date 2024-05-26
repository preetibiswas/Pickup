import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import ContactScreen from './src/screens/contactScreen.js';
import CallingScreen from './src/screens/callingScreeen/index.js';
import IncomingScreen from './src/screens/IncomingScreen/index.js';
import CallScreen from './src/screens/CallScreen';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <CallScreen />
    </View>
  );
}

const styles = StyleSheet.create({});
