import React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'react-native';

import Routes from './src/Routes';

const queryClient = new QueryClient();

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#111111',
    card: '#1E1E1E',
  },
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer theme={theme}>
        <Routes />
      </NavigationContainer>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
    </QueryClientProvider>
  );
};

export default App;
