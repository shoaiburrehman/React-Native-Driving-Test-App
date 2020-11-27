/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
// Screens
import { Onboarding, Home, Exams, Favorites, Settings } from "./screens";

import Tabs from "./navigation/tabs";

const theme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      border: "transparent",
  },
};

const Stack = createStackNavigator();

const App = ({navigation}) => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator 
        initialRouteName={'Onboarding'}
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ffffff",
            //shadowColor: '#fff',  //to remove the top tab line for iOS
            elevation: 0, //to remove the top tab line for android
          },
        }}
      >
        {/* Screens */}
        <Stack.Screen 
          name="Onboarding"
          component={Onboarding}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: '#053cc4',
              elevation: 0
            },
            //headerLeft: null,
            headerLeft: ({onPress}) => (
              <TouchableOpacity
                  style={{ marginLeft: 15 }}
                  onPress={onPress}
              >
                <Text style={{color: '#ffffff'}}>Skip</Text>
              </TouchableOpacity>
            ),
          }}
        />

        {/* Tabs */}
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{
              title: "DMV Practice Test",
              //headerTransparent: true,
              headerStyle: {
                  backgroundColor: '#ffffff',
                  elevation: 0
              },
              headerLeft: ({onPress}) => (
                <TouchableOpacity
                    style={{ marginLeft: 15 }}
                    onPress={onPress}
                >
                  <FontAwesome name="chevron-left" size={22} color={"#333333"} />
                </TouchableOpacity>
              ),
          }}
        />

      <Stack.Screen
        name="Exams"
        component={Tabs}
        options={{
            title: null,
            headerStyle: {
                backgroundColor: '#ffffff',
                elevation: 0
            },
        }}
      />

      <Stack.Screen
        name="Favorites"
        component={Tabs}
        options={{
            title: null,
            headerStyle: {
                backgroundColor: '#ffffff',
                elevation: 0
            },
        }}
      />

      <Stack.Screen
        name="Settings"
        component={Tabs}
        options={{
            title: null,
            headerStyle: {
                backgroundColor: '#ffffff',
                elevation: 0
            },
        }}
      />

    </Stack.Navigator>
  </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
