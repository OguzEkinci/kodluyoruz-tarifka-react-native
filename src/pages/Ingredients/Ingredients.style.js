import {Dimensions, StyleSheet} from 'react-native';
import React from 'react';
export default StyleSheet.create({
  contain: {flex: 1, flexDirection: 'column'},
  image: {
    height: 300,
    width: Dimensions.get('screen').width,
  },
  topic: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 2,
  },
  tradition: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 15,
    margin: 2,
  },
  explanation: {
    fontWeight: 'bold',
    margin: 2,
  },
  watchButton: {
    width: 360,
    height: 40,
    backgroundColor: 'red',
    textColor: 'white',
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
