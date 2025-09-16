// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens
import Dashboard from './screens/Dashboard';
import Subscription from './screens/Subscription';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        {/* Dashboard screen (provider’s home) */}
        <Stack.Screen 
          name="Dashboard" 
          component={Dashboard} 
          initialParams={{ providerId: '123' }} // you’d normally set this after login
        />

        {/* Subscription screen (purchase/renew subscription) */}
        <Stack.Screen 
          name="Subscription" 
          component={Subscription} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
