/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, ImageBackground, Pressable} from 'react-native';
import React from 'react';
import bg from '../../assets/ios_bg.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

export default function index() {
  const onDecline = () => {
    console.log('onDecline');
  };
  const onAccept = () => {
    console.log('onAccept');
  };
  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require('../../assets/ios_bg.png')}
        style={styles.bg}
        resizeMode="cover"
      >
        <Text style={styles.name}>Alex</Text>
        <Text style={styles.phoneNum}>WahatsApp Video...</Text>
        <View style={[styles.row, {marginTop: 'auto'}]}>
          <View style={styles.iconsContainer}>
            <Ionicons name="alarm" color="white" size={30} />
            <Text style={styles.iconText}>Remind me</Text>
          </View>
          <View style={styles.iconsContainer}>
            <Entypo name="message" color="white" size={30} />
            <Text style={styles.iconText}>message</Text>
          </View>
        </View>

        <View style={styles.row}>
          {/* decline */}
          <Pressable style={styles.iconsContainer} onPress={onDecline}>
            <View style={styles.iconbtn}>
              <Feather name="x" color="white" size={30} />
            </View>

            <Text style={styles.iconText}>Decline</Text>
          </Pressable>
          {/* {accept} */}
          <Pressable style={styles.iconsContainer} onPress={onAccept}>
            <View style={[styles.iconbtn, {backgroundColor: '#2e7bff'}]}>
              <Feather name="check" color="white" size={30} />
            </View>

            <Text style={styles.iconText}>Accept</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
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
  bg: {flex: 1, alignItems: 'center', padding: 10, paddingBottom: 50},
  screen: {
    height: '100%',
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  iconsContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  iconText: {
    color: 'white',
  },
  iconbtn: {
    backgroundColor: 'red',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});
