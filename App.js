import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Button } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/Home';
import TreatmentScreen from './screens/Treatments';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Home Page', statusBarStyle: "dark" }}
          />
          <Stack.Screen
            name="Treatment"
            component={TreatmentScreen}
            options={{statusBarStyle: "dark"}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "purple"
  }
});
