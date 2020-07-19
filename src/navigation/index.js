import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// import Home from '../screens/app/Home';
import Login from '../screens/auth/Login';
import AppScreen from './app';

class Navigation extends React.Component {
  state = {
    isLoggedIn: true,
  };
  render() {
    const {isLoggedIn} = this.state;
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {isLoggedIn ? (
            <>
              <Stack.Screen
                options={{headerShown: false}}
                name="App"
                component={AppScreen}
              />
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={Login} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigation;
