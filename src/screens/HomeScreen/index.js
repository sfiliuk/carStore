import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';

const HomeScreen = (props) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Hello, HomeScreen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

HomeScreen.options = {
  topBar: {
    visible: false,
    height: 0,
  },
};

export default HomeScreen;
