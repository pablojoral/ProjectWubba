import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../components/HomeScreen/HomeScreen';
import {RoutesParams} from './types';
import CharacterDetailsScreen from '../components/CharacterDetailsScreen/CharacterDetailsScreen';

const Stack = createNativeStackNavigator<RoutesParams>();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CharacterDetailsScreen"
        component={CharacterDetailsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routes;
