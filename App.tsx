import React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'react-native';

import RootNavigator from './src/navigators/RootNavigator';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer
        theme={{
          ...DarkTheme,
          colors: {
            ...DarkTheme.colors,
            background: '#111111',
            card: '#1E1E1E',
          },
        }}
      >
        <RootNavigator />
      </NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#111111" />
    </QueryClientProvider>
  );
}
