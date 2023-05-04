import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { StatusBar } from 'react-native';

import AuthProvider from './src/context/AuthProvider';
import Navigation from './src/navigations';
import theme from './src/utils/theme';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <NavigationContainer theme={theme}>
        <Navigation />
      </NavigationContainer>

      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
