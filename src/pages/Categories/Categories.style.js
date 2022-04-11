import {Dimensions, StyleSheet} from 'react-native';
import React from 'react';
export default StyleSheet.create({
  categoryButton: {
    height: 80,
    width: 385,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 6,
    marginLeft: 4,
    marginRight: 4,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
  },
  image: {
    height: 60,
    width: Dimensions.get('window').width / 3,
    resizeMode: 'contain',
  },
  category: {
    marginLeft: 10,
  },
});
