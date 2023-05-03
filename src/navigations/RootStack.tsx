import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';

import { NavigationProp } from '@react-navigation/native';
import { ID } from '../config/api';
import Favorites from '../screens/Favorites';
import Home from '../screens/home/Home';
import Login from '../screens/Login';
import MovieDetails from '../screens/movieDetails';
import Register from '../screens/Register';

export type RootStackParamList = {
  Home: undefined;
  Signup: undefined;
  Login: undefined;
  Favorites: undefined;
  MovieDetails: {
    movieId: ID;
  };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type RootNavigationProp = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="MovieDetails" component={MovieDetails} />
    <Stack.Screen name="Favorites" component={Favorites} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Register} />
  </Stack.Navigator>
);

export default RootStack;
