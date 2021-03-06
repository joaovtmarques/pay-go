import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainTab from '../navigation/mainTab';
import Login from '../screens/Login';
import Preload from '../screens/Preload';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  );
}
