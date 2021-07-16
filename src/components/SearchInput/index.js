import React from 'react';
import {Image, StyleSheet, TextInput, View, Text} from 'react-native';

import {colors} from '../../styles/colors';
import searchIcon from '../../assets/images/search.png';

const SearchInput = ({onSearch, search}) => {
  // console.log('props: ', props);
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={onSearch}
        placeholder="Введіть назву моделі..."
        style={styles.input}
        value={search}
      />
      <Image style={styles.icon} source={searchIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    marginTop: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'space-between',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: colors.lightGreen,
  },
  input: {
    flex: 5,
    height: 40,
    margin: 12,
  },
  tinyLogo: {
    width: 250,
    height: 180,
    resizeMode: 'stretch',
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default SearchInput;
