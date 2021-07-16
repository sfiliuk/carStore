import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {Navigation} from 'react-native-navigation';

import BrandCard from '../../components/BrandCard';

import {brands, logos} from '../../assets/data';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  contentContainer: {
    paddingBottom: 20,
  },
});

const goToScreen = (screenName, options, currentScreenId) =>
  Navigation.push(currentScreenId, {
    component: {
      name: screenName,
      options,
    },
  });

const goToSearchScreen = (propsOptions, currentScreenId) =>
  Navigation.push(currentScreenId, {
    component: {
      name: 'carStore.SearchScreen',
      passProps: {carBrand: propsOptions.item},
      options: {
        topBar: {
          title: {
            text: `Пошук ${propsOptions.item}`,
          },
        },
      },
    },
  });

export const CatalogScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Hello, CatalogScreen</Text>
      </View>
      <FlatList
        style={styles.contentContainer}
        data={brands}
        renderItem={({item}) => (
          <BrandCard
            item={item}
            onPress={() => goToSearchScreen({item}, props.componentId)}
          />
        )}
        keyExtractor={(item) => item.toString()}
      />
    </SafeAreaView>
  );
};

CatalogScreen.options = {
  topBar: {
    visible: false,
    height: 0,
  },
};

export default CatalogScreen;
