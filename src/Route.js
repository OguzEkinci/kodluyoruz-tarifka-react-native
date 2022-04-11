/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Categories from './pages/Categories';
import Meal from './pages/Meal';
import Ingredients from './pages/Ingredients';
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{headerTintColor: 'orange', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="Meal"
          component={Meal}
          options={{headerTintColor: 'orange', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="Ingredients"
          component={Ingredients}
          options={{headerTintColor: 'orange', headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
