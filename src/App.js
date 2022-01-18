import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import CardOpening from './screens/CardOpening';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <CardOpening />
    </SafeAreaView>
  );
}
