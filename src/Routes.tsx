import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Home from './screens/home';
import MovieDetails from './screens/movieDetails';

export type RootStackParamList = {
  Home: undefined;
  MovieDetails: {
    movieId: number;
  };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const Routes = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="MovieDetails" component={MovieDetails} />
    </RootStack.Navigator>
  );
};

export default Routes;
