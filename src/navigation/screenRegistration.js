import {Navigation} from 'react-native-navigation';

import {CatalogScreen, FavoritesScreen, HomeScreen} from '../screens';

export default function () {
  Navigation.registerComponent('carStore.CatalogScreen', () => CatalogScreen);

  Navigation.registerComponent(
    'carStore.FavoritesScreen',
    () => FavoritesScreen,
  );

  Navigation.registerComponent('carStore.HomeScreen', () => HomeScreen);
}
