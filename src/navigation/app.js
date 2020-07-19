import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/app/Home';
import Profile from '../screens/app/Profile';

const Stack = createStackNavigator();

const AppScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default AppScreen;
