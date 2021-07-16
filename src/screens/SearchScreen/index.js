import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import SearchInput from '../../components/SearchInput';
import {colors} from '../../styles/colors';
import {models} from '../../assets/data';

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 20,
    width: '90%',
    fontSize: 14,
  },
  contentContainer: {
    alignSelf: 'center',
  },
  listContainer: {
    marginVertical: 15,
    paddingBottom: 70,
  },
  itemContainer: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: colors.lightGreen,
    padding: 10,
    marginTop: 10,
  },
});

export const SearchScreen = (props) => {
  console.log('props: ', props);
  const {carBrand} = props;

  const [search, setSearch] = useState('');
  const onSearch = (value) => {
    setSearch(value);
  };
  const currentBrandModels = models.filter((model) => model.brand === carBrand);
  return (
    <SafeAreaView style={styles.contentContainer}>
      <View style={styles.titleContainer}>
        <Text>Пошук автомобіля за назвою моделі</Text>
      </View>
      <SearchInput onSearch={onSearch} search={search} />
      <FlatList
        style={styles.listContainer}
        data={currentBrandModels.filter(
          (model) =>
            !search ||
            model.name.toLowerCase().indexOf(search.toLowerCase()) > -1,
        )}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Text>{item.name}</Text>
            <Image
              style={{height: 150, resizeMode: 'contain'}}
              source={{uri: item.image}}
            />
          </View>
          // onPress={() => goToSearchScreen({item}, props.componentId)}
        )}
        keyExtractor={(item) => item.image}
      />
    </SafeAreaView>
  );
};

SearchScreen.options = {
  // topBar: {
  //   backButton: {
  //     color: 'white',
  //   },
  //   background: {
  //     color: '#4d089a',
  //   },
  // },
};

export default SearchScreen;
