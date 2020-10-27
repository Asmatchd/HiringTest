import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Dashboard } from '../screens/dashboard';
import { TabNavigator } from './TabNavigator';
import { Doctor, DoctorHistory } from '../screens/doctor';
import { Settings } from '../screens/settings';
import { Appointment } from '../screens/appointment';
import { Cart } from '../screens/cart';

const Stack = createStackNavigator();

export const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown:false}} />
      <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />
      <Stack.Screen name="Settings" component={Settings} options={{headerShown:false}} />
      <Stack.Screen name="Cart" component={Cart} options={{headerShown:false}} />
      <Stack.Screen name="Doctor" component={Doctor} options={{headerShown:false}} />
      <Stack.Screen name="DoctorHistory" component={DoctorHistory} options={{headerShown:false}} />
      <Stack.Screen name="Appointment" component={Appointment} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
