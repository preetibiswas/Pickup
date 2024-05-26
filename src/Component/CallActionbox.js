/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function () {
  const [isCameraon, setIsCameraon] = useState(false);
  const [isMicOn, setIsMicOn] = useState(false);
  const onReverseCamera = () => {};
  const onToggleCamera = () => {
    setIsCameraon(prev => !prev);
  };
  const onToggleMicrophone = () => {
    setIsMicOn(prev => !prev);
  };
  const onHangeup = () => {};
  return (
    <View style={styles.bottomContainer}>
      <Pressable style={styles.iconBtn} onPress={onReverseCamera}>
        <Ionicons name="camera-reverse" size={30} color="white" />
      </Pressable>
      <Pressable style={styles.iconBtn} onPress={onToggleCamera}>
        <Feather
          name={isCameraon ? 'camera' : 'camera-off'}
          size={30}
          color="white"
        />
      </Pressable>
      <Pressable style={styles.iconBtn} onPress={onToggleMicrophone}>
        <Feather name={isMicOn ? 'mic' : 'mic-off'} size={30} color="white" />
      </Pressable>
      <Pressable
        style={[styles.iconBtn, {backgroundColor: 'red'}]}
        onPress={onHangeup}
      >
        <MaterialIcons name="call-end" size={30} color="white" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    padding: 20,
    backgroundColor: '#333333',
    flexDirection: 'row',
    justifyContent: 'space-around',

    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 'auto',
  },
  iconBtn: {
    backgroundColor: '#4a4a4a',
    padding: 10,
    borderRadius: 50,
    margin: 10,
  },
});
