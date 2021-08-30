import 'react-native-gesture-handler';

import React from 'react';
import { Text, View, } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Search from './src/pages/Search';
import Favorites from './src/pages/Favorites';

import MovieDetails from './src/pages/MovieDetails';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function BottomTabs(){
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: '#121A23'}}
      activeColor="#4B97C5"
      inactiveColor="#3C434A"
      shifting={true}
      >
        <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ color }) => (
          <Feather name='home' size={24} color={color}/>
          ),
          title: 'Início'
        }}
        />
        <Tab.Screen 
        name="Search" 
        component={Search} 
        options={{
          tabBarIcon: ({ color }) => (
          <Feather name='search' size={24} color={color}/>
          ),
          title: 'Busca'
        }}
        />
        <Tab.Screen 
        name="Favorites" 
        component={Favorites} 
        options={{
          tabBarIcon: ({ color }) => (
          <Feather name='bookmark' size={24} color={color}/>
          ),
          title: 'Favoritos'
        }}
        />
      </Tab.Navigator>
  )
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_800ExtraBold
  });

  if (!fontsLoaded){
    return (
      <View>
        <Text>Carregando ...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="BottomTab" component={BottomTabs}/>
        <Stack.Screen name="MovieDetails" component={MovieDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
