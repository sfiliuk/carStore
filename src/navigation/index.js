import {Navigation} from 'react-native-navigation';

import home from '../assets/images/home.png';
import car from '../assets/images/car.png';
import search from '../assets/images/search.png';
import star from '../assets/images/star.png';

export function startMainTabs() {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    id: 'carStore.HomeScreen',
                    name: 'carStore.HomeScreen',
                    passProps: {
                      text: 'This is tab 1',
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Автосалон',
                  icon: car,
                  selectedIconColor: '#00D78D',
                  selectedTextColor: '#00D78D',
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    id: 'carStore.CatalogScreen',
                    name: 'carStore.CatalogScreen',
                    passProps: {
                      text: 'This is tab 1',
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Каталог',
                  icon: search,
                  selectedIconColor: '#00D78D',
                  selectedTextColor: '#00D78D',
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    id: 'carStore.FavoritesScreen',
                    name: 'carStore.FavoritesScreen',
                    passProps: {
                      text: 'This is tab 1',
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Обрані',
                  icon: star,
                  selectedIconColor: '#00D78D',
                  selectedTextColor: '#00D78D',
                },
              },
            },
          },
        ],
      },
    },
  });
}

export function screenPicker() {
  Navigation.events().registerAppLaunchedListener(async () => {
    // try {
    //   const values = await AsyncStorage.multiGet(['ACCESS_TOKEN', 'ONBOARD']);
    //   const accessToken = values[0][1];
    //   const onboard = values[1][1];

    //   console.log(values);
    //   if (onboard !== 'true') {
    //     startOnboardScreen();
    //     console.log('ONBOARD FALSE');
    //   } else if (!accessToken) {
    //     startLoginScreen();
    //     console.log('NO TOKEN');
    //   } else {
    startMainTabs();
    //     console.log('TOKEN IS HERE');
    //   }
    // } catch (error) {
    //   console.log('Something went wrong', error);
    // }
  });
}
