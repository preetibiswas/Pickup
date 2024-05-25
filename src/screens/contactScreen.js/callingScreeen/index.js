/* eslint-disable prettier/prettier */
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function CallingScreen() {
  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="pink" />
      <View style={styles.cameraPreview}>
        <Text style={styles.name}>Alex</Text>
        <Text style={styles.phoneNum}>ringing +7906619413</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.iconBtn}>
          <Ionicons name="camera-reverse" size={30} color="white" />
        </View>
        <View style={styles.iconBtn}>
          <Feather name="camera-off" size={30} color="white" />
        </View>
        <View style={styles.iconBtn}>
          <Feather name="mic-off" size={30} color="white" />
        </View>
        <View style={[styles.iconBtn, {backgroundColor: 'red '}]}>
          <MaterialIcons name="call-end" size={30} color="white" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    justifyContent: 'flex-end',
    backgroundColor: 'pink',
  },

  cameraPreview: {
    backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 50,
    marginBottom: 15,
  },
  phoneNum: {
    fontSize: 25,
    color: 'white',
  },
  bottomContainer: {
    padding: 20,
    backgroundColor: '#333333',
    flexDirection: 'row',
    justifyContent: 'space-around',

    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  iconBtn: {
    backgroundColor: '#4a4a4a',
    padding: 10,
    borderRadius: 50,
    margin: 10,
  },
});
