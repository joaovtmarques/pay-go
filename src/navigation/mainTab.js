import React from 'react';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { theme } from '../global/theme';

import Pay from '../screens/Pay';
import Main from '../screens/Main';
import AddCard from '../screens/AddCard';
import Services from '../screens/Services';
import Transfer from '../screens/Transfer';
import Monitoring from '../screens/Monitoring';
import CardOpening from '../screens/CardOpening';
import Notifications from '../screens/Notifications';

const Tab = createBottomTabNavigator();

const TabItem = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 12px;
  font-family: ${theme.fonts.regular};
  font-weight: 700;
  color: ${theme.colors.white};
`;

export default function Tabs({ navigation }) {
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.secondary,
          height: 75,
          borderTopWidth: 0,
          justifyContent: 'center',
        },
      }}
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem
              style={{
                backgroundColor: focused
                  ? theme.colors.green
                  : theme.colors.secondary,
              }}
              onPress={() => goTo('Main')}
            >
              <Ionicons
                style={{ opacity: focused ? 1 : 0.4 }}
                name="grid-outline"
                size={26}
                color={focused ? theme.colors.white : theme.colors.green}
              />
              <Title>Main</Title>
            </TabItem>
          ),
        }}
      />
      <Tab.Screen
        name="Transfer"
        component={Transfer}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem
              style={{
                backgroundColor: focused
                  ? theme.colors.green
                  : theme.colors.secondary,
              }}
              onPress={() => goTo('Transfer')}
            >
              <Ionicons
                style={{ opacity: focused ? 1 : 0.4 }}
                name="swap-horizontal"
                size={28}
                color={focused ? theme.colors.white : theme.colors.green}
              />
              <Title>Transfer</Title>
            </TabItem>
          ),
        }}
      />
      <Tab.Screen
        name="Pay"
        component={Pay}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem
              style={{
                backgroundColor: focused
                  ? theme.colors.green
                  : theme.colors.secondary,
              }}
              onPress={() => goTo('Pay')}
            >
              <Ionicons
                style={{ opacity: focused ? 1 : 0.4 }}
                name="wallet-outline"
                size={28}
                color={focused ? theme.colors.white : theme.colors.green}
              />
              <Title>Pay</Title>
            </TabItem>
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem
              style={{
                backgroundColor: focused
                  ? theme.colors.green
                  : theme.colors.secondary,
              }}
              onPress={() => goTo('Services')}
            >
              <Ionicons
                style={{ opacity: focused ? 1 : 0.4 }}
                name="briefcase-outline"
                size={28}
                color={focused ? theme.colors.white : theme.colors.green}
              />
              <Title>Services</Title>
            </TabItem>
          ),
        }}
      />
      <Tab.Screen
        name="Monitoring"
        component={Monitoring}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem
              style={{
                backgroundColor: focused
                  ? theme.colors.green
                  : theme.colors.secondary,
              }}
              onPress={() => goTo('Monitoring')}
            >
              <Ionicons
                style={{ opacity: focused ? 1 : 0.4 }}
                name="sync-circle-outline"
                size={32}
                color={focused ? theme.colors.white : theme.colors.green}
              />
              <Title>Monitoring</Title>
            </TabItem>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
