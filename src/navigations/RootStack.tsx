import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';

import { ID } from '../config/api';
import MovieDetails from '../screens/movieDetails';
// import AuthStack from './AuthStack';
import { NavigationProp } from '@react-navigation/native';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/home/Home';

export type RootStackParamList = {
  Home: undefined;
  Signup: undefined;
  Login: undefined;
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
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Register} />
  </Stack.Navigator>
);

export default RootStack;
