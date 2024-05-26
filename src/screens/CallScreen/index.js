/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CallActionbox from '../../Component/CallActionbox';

export default function index() {
  return (
    <View style={styles.screen}>
      <View style={styles.cameraPreview} />
      <CallActionbox />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#7b4e80',
  },
  cameraPreview: {
    width: 100,
    height: 150,
    position: 'absolute',
    backgroundColor: '#ffff6e',
    right: 10,
    top: 100,
    borderRadius: 10,
  },
});
