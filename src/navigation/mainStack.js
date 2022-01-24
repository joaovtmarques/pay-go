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
      {/* <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="CardOpening" component={CardOpening} />
      <Stack.Screen name="Monitoring" component={Monitoring} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Pay" component={Pay} />
      <Stack.Screen name="Services" component={Services} />
      <Stack.Screen name="Transfer" component={Transfer} /> */}
    </Stack.Navigator>
  );
}
