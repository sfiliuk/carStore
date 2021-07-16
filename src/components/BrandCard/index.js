import React from 'react';
import {Image, StyleSheet, Pressable, View, Text} from 'react-native';

import {logos} from '../../assets/data';
import {colors} from '../../styles/colors';

const BrandCard = ({item, onPress}) => {
  console.log(item);
  return (
    <Pressable style={styles.cardContainer} onPress={onPress}>
      <Image style={styles.tinyLogo} source={logos[item.toLowerCase()]} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '90%',
    height: 200,
    alignSelf: 'center',
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: colors.lightGreen,
  },
  tinyLogo: {
    height: 180,
    resizeMode: 'contain',
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default BrandCard;
