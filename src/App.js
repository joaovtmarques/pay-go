import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import MainStack from './navigation/mainStack';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <MainStack />
      </SafeAreaView>
    </NavigationContainer>
  );
}
