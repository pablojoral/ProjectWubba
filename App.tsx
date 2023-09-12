import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes/Routes';

const queryClient = new QueryClient();

function Root(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <Routes />
        </QueryClientProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default Root;
